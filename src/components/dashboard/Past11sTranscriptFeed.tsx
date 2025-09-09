import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Search, MessageSquare, Copy, Download, Highlighter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Past11sTranscriptFeed() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for meeting transcripts
  const transcripts = [
    {
      id: 1,
      manager: "Sarah Johnson",
      managerRole: "Engineering Manager",
      managerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 28, 2025",
      duration: "45 min",
      meetingType: "Weekly 1:1",
      topics: ["Q2 Goals Review", "Career Development", "Project Updates"],
      transcript: `Sarah: Hi! How are you feeling about your Q2 goals so far?

You: I'm making good progress on the React migration project. We've completed about 60% of the component conversions and I think we'll hit our target date.

Sarah: That's excellent! I've been hearing great feedback from the team about your leadership on this project. How are you finding the technical challenges?

You: The main challenge has been maintaining backward compatibility while we transition. We've implemented a bridge pattern that's working well.

Sarah: Perfect. Let's talk about your career development goals. You mentioned wanting to take on more architecture decisions...

You: Yes, I'd love to be more involved in the system design discussions. I feel ready to contribute at that level.

Sarah: I think you're ready too. Let me set up some time with the senior architects to get you involved in our upcoming microservices planning.`,
      wordCount: 847,
      keyHighlights: [
        "React migration project 60% complete",
        "Leadership feedback has been positive", 
        "Ready for architecture responsibilities",
        "Microservices planning involvement"
      ]
    },
    {
      id: 2,
      manager: "Michael Chen",
      managerRole: "Senior Engineering Manager",
      managerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
      date: "May 21, 2025",
      duration: "38 min",
      meetingType: "Bi-weekly Check-in",
      topics: ["Team Collaboration", "Technical Challenges", "Mentoring"],
      transcript: `Michael: Let's start with how the cross-team collaboration has been going.

You: It's been much smoother since we implemented the RFC process. The infrastructure team is much more responsive now that we have structured proposals.

Michael: Great to hear. Any ongoing technical debt concerns?

You: The legacy authentication system is still causing issues. We're spending about 20% of our time on related bugs.

Michael: That's significant. What's your recommendation?

You: I think we should prioritize the OAuth migration in Q3. I'd like to lead that effort if possible.

Michael: I love your initiative. Let's discuss the mentoring aspect too - how are things going with the junior developers?

You: Really well! I've been pairing with Alex and Jamie twice a week. They're both progressing quickly on the testing frameworks.`,
      wordCount: 652,
      keyHighlights: [
        "RFC process improving collaboration",
        "Legacy auth system consuming 20% time",
        "OAuth migration proposed for Q3",
        "Mentoring sessions twice weekly"
      ]
    }
  ];

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const filteredTranscripts = transcripts.filter(transcript =>
    transcript.transcript.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transcript.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
    transcript.keyHighlights.some(highlight => highlight.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-yellow-900 px-1 rounded">
          {part}
        </span>
      ) : part
    );
  };

  const handleCopyTranscript = (transcriptId: number) => {
    const transcript = transcripts.find(t => t.id === transcriptId);
    if (transcript) {
      navigator.clipboard.writeText(transcript.transcript);
    }
  };

  const handleDownloadTranscript = (transcriptId: number) => {
    const transcript = transcripts.find(t => t.id === transcriptId);
    if (transcript) {
      const element = document.createElement('a');
      const file = new Blob([transcript.transcript], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `transcript-${transcript.date}-${transcript.manager.replace(' ', '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-24">
        {/* Left Sidebar - Search & Summary */}
        <div className="w-full md:w-1/3 space-y-6 mb-8 md:mb-0">
          <Card className="bg-white border border-[#9b87f5] rounded-lg shadow-sm">
            <CardHeader className="bg-[#F1F0FB] border-b border-[#9b87f5]">
              <CardTitle className="text-xl text-[#512888] flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Transcripts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <Input
                placeholder="Search conversations, topics, or highlights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4"
              />
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-[#512888]">{filteredTranscripts.length}</div>
                  <div className="text-sm text-muted-foreground">Matching Transcripts</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#512888]">
                    {filteredTranscripts.reduce((acc, t) => acc + t.wordCount, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Words</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-[#512888]">12</div>
                  <div className="text-sm text-muted-foreground">All Transcripts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content - Transcript Feed */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#512888]">Meeting Transcripts</h2>
              <p className="text-muted-foreground">Searchable conversation records from your 1:1s</p>
            </div>
          </div>
          
          <Separator className="my-4 bg-[#9b87f5]" />
          
          {/* Transcripts feed */}
          <div className="space-y-6">
            {filteredTranscripts.map((transcript) => (
              <Card 
                key={transcript.id}
                className="overflow-hidden border-[3px] border-[#840DD7] hover:shadow-md transition-shadow animate-fade-in bg-white"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-gray-200">
                        <AvatarImage src={transcript.managerAvatar} alt={transcript.manager} />
                        <AvatarFallback>{getInitials(transcript.manager)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{transcript.manager}</div>
                        <div className="text-xs text-muted-foreground">{transcript.managerRole}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {transcript.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CardTitle className="text-lg text-[#512888]">{transcript.meetingType}</CardTitle>
                    <Badge variant="outline">{transcript.duration}</Badge>
                    <Badge variant="secondary" className="bg-[#F1F0FB] text-[#512888]">
                      {transcript.wordCount} words
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    <strong>Topics:</strong> {transcript.topics.join(", ")}
                  </div>
                  
                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-[#512888] mb-2 flex items-center gap-2">
                      <Highlighter className="h-4 w-4" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {transcript.keyHighlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="px-3 py-2 bg-blue-50 text-blue-800 rounded-lg text-xs"
                        >
                          {highlightText(highlight, searchQuery)}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Transcript Preview */}
                  <div>
                    <h4 className="text-sm font-medium text-[#512888] mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Conversation
                    </h4>
                    <div className="bg-gray-50 p-3 rounded-lg text-sm leading-relaxed max-h-48 overflow-y-auto">
                      <div className="whitespace-pre-line">
                        {highlightText(transcript.transcript, searchQuery)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="flex gap-4">
                      <button 
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]"
                        onClick={() => handleCopyTranscript(transcript.id)}
                      >
                        <Copy className="h-4 w-4" /> 
                        Copy Text
                      </button>
                      <button 
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-[#512888]"
                        onClick={() => handleDownloadTranscript(transcript.id)}
                      >
                        <Download className="h-4 w-4" /> 
                        Download
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {transcript.wordCount} words
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTranscripts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">No matching transcripts</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}