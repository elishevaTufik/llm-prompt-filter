
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!prompt.trim()) {
      toast({
        title: "שגיאה",
        description: "אנא הזן פרומפט לניתוח",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResults(data);
      
      toast({
        title: "הניתוח הושלם",
        description: "תוצאות הניתוח מוצגות",
      });
    } catch (error) {
      console.error('Error analyzing prompt:', error);
      toast({
        title: "שגיאה בניתוח",
        description: "לא ניתן היה להתחבר לשרת הניתוח",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderValue = (value: any): React.ReactNode => {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        return (
          <div className="space-y-1">
            {value.map((item, index) => (
              <Badge key={index} variant="secondary" className="mr-1 mb-1 text-xs">
                {String(item)}
              </Badge>
            ))}
          </div>
        );
      }
      return (
        <div className="space-y-1 border-r-4 border-blue-100 pr-2">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-blue-600">{key}:</span>
              <div className="mr-2">{renderValue(val)}</div>
            </div>
          ))}
        </div>
      );
    }
    return <span className="text-gray-800 text-sm">{String(value)}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Logo */}
        <div className="text-center mb-12 mt-6">
          <img 
            src="/lovable-uploads/ab7881ea-503f-4392-ab5c-8677873c72ea.png" 
            alt="AI Logo" 
            className="mx-auto mb-12 h-28 w-auto drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-1">
            Prompt Analyzer
          </h1>
          <p className="text-xl text-gray-600">
נתח את הפרומפט שלך לפי כללים מוגדרים          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Input Section */}
          <div>
            <Card className="shadow-lg border-0 h-fit">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-lg py-3">
                <CardTitle className="text-lg">הזן פרומפט לניתוח</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="הזן כאן את הפרומפט שברצונך לנתח..."
                  className="min-h-[140px] text-sm border-2 border-gray-200 focus:border-blue-400 transition-colors resize-none"
                  dir="auto"
                />
                <Button
                  onClick={handleAnalyze}
                  disabled={isLoading}
                  className="mt-3 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 text-sm transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      מנתח...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      נתח פרומפט
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {results ? (
              <Card className="shadow-lg border-0 h-fit">
                <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg py-3">
                  <CardTitle className="text-lg">תוצאות הניתוח</CardTitle>
                </CardHeader>
                <CardContent className="p-4 max-h-[400px] overflow-y-auto">
                  <div className="space-y-3">
                    {Object.entries(results).map(([key, value]) => (
                      <div key={key} className="group text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-px bg-gradient-to-r from-blue-300 to-transparent flex-1"></div>
                          <h3 className="text-sm font-semibold text-gray-800 capitalize">
                            {key.replace(/_/g, ' ')}
                          </h3>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors">
                          {renderValue(value)}
                        </div>
                        <Separator className="mt-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="flex items-center justify-center h-64 text-gray-500">
                <div className="text-center">
                  <p className="text-lg mb-2">🔍</p>
                  <p className="text-sm">תוצאות הניתוח יוצגו כאן</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-500">
          <p className="text-xs">© 2025 Prompt Analyzer - By Malka Bruk</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
