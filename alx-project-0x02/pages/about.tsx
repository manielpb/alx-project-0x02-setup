import React from "react";
import Button from "@/components/common/Button";


export default function(){
    return (
        <>
          <h1 className="bg-red-600">welcome to about page</h1>
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </>
    )
}