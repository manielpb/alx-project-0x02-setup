import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


export default function(){
    return (
        <div className="min-h-screen bg-gray-50">
             <Header />
             <main className="max-w-3xl mx-auto p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">welcome to about page</h1>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="small" shape="rounded-sm">Small</Button>
                    <Button size="medium" shape="rounded-md">Medium</Button>
                    <Button size="large" shape="rounded-full">Large</Button>
                </div>
               
             </main>
        </div>
         
         
         
      
    )
}