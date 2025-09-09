import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Search, MessageSquare, Copy, Download, Highlighter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Past11sTranscriptFeed() {
  console.log("Past11sTranscriptFeed component rendering");

  return (
    <div className="container p-4 mx-auto">
      <h1 className="text-2xl font-bold text-[#512888] mb-4">Meeting Transcripts</h1>
      <p className="text-muted-foreground">This is a test to see if the component renders</p>
    </div>
  );
}