-- Skills Database Schema
-- Run this in your Supabase SQL editor

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    category TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_skills table for skills employees attribute to themselves
CREATE TABLE IF NOT EXISTS user_skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    proficiency_level INTEGER CHECK (proficiency_level >= 1 AND proficiency_level <= 5) DEFAULT 3,
    years_experience INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, skill_id)
);

-- Create skill_endorsements table for colleague endorsements
CREATE TABLE IF NOT EXISTS skill_endorsements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    endorser_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    endorsed_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(endorser_id, endorsed_user_id, skill_id),
    CHECK (endorser_id != endorsed_user_id)
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_skills_user_id ON user_skills(user_id);
CREATE INDEX IF NOT EXISTS idx_user_skills_skill_id ON user_skills(skill_id);
CREATE INDEX IF NOT EXISTS idx_skill_endorsements_endorsed_user ON skill_endorsements(endorsed_user_id);
CREATE INDEX IF NOT EXISTS idx_skill_endorsements_endorser ON skill_endorsements(endorser_id);
CREATE INDEX IF NOT EXISTS idx_skill_endorsements_skill ON skill_endorsements(skill_id);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);

-- Enable RLS
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_endorsements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for skills (readable by all authenticated users)
CREATE POLICY "Skills are readable by authenticated users" ON skills
    FOR SELECT USING (auth.role() = 'authenticated');

-- RLS Policies for user_skills
CREATE POLICY "Users can view all user skills" ON user_skills
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can manage their own skills" ON user_skills
    FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for skill_endorsements
CREATE POLICY "Users can view all endorsements" ON skill_endorsements
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can create endorsements for others" ON skill_endorsements
    FOR INSERT WITH CHECK (auth.uid() = endorser_id AND auth.uid() != endorsed_user_id);

CREATE POLICY "Users can update their own endorsements" ON skill_endorsements
    FOR UPDATE USING (auth.uid() = endorser_id);

CREATE POLICY "Users can delete their own endorsements" ON skill_endorsements
    FOR DELETE USING (auth.uid() = endorser_id);