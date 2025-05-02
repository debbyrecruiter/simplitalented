
import { useState } from "react";
import { ListCheck, Plus, Check, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export function ExpandedToDoListSection() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Complete quarterly review', completed: false },
    { id: '2', text: 'Schedule team meeting', completed: true },
    { id: '3', text: 'Update project timeline', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodoText.trim(),
          completed: false
        }
      ]);
      setNewTodoText('');
    }
  };

  const toggleTodoStatus = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-[#F1F0FB] rounded-full">
          <ListCheck className="h-6 w-6 text-[#512888]" />
        </div>
        <h2 className="text-3xl font-bold text-[#512888]">My To Do List</h2>
      </div>
      
      <Separator className="my-4 bg-gray-200" />
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg border-[3px] border-[#840DD7] shadow-sm">
        <div className="flex mb-6">
          <Input 
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="rounded-r-none focus-visible:ring-[#840DD7]"
          />
          <Button 
            onClick={handleAddTodo}
            className="rounded-l-none bg-[#840DD7] hover:bg-[#9320E7]"
          >
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>

        <div className="space-y-2">
          {todos.map((todo) => (
            <div 
              key={todo.id} 
              className={cn(
                "flex items-center justify-between p-3 rounded-lg transition-colors",
                todo.completed ? "bg-gray-100" : "bg-white hover:bg-gray-50",
                "border border-gray-200"
              )}
            >
              <div className="flex items-center gap-3 flex-1">
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "h-6 w-6 rounded-full p-0 border-2",
                    todo.completed 
                      ? "bg-[#840DD7] border-[#840DD7] text-white" 
                      : "border-gray-300"
                  )}
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  {todo.completed && <Check className="h-3 w-3" />}
                </Button>
                <span className={cn(
                  todo.completed && "line-through text-gray-500"
                )}>
                  {todo.text}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTodo(todo.id)}
                className="h-8 w-8 text-gray-500 hover:text-red-500 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {todos.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No tasks yet. Add one above!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
