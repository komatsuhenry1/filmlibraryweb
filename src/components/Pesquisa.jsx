import React from "react";
import {Input} from "@nextui-org/react";
import { Search } from "lucide-react";

export default function Pesquisa() {
  return (
    
      
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[30rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "my-10 h-full text-default-500 bg-default-900/90 ",
          }}
          placeholder="Pesquisar..."
          size="sm"
          startContent={<Search size={18}/>}
          
          type="search"
        />
      
    
  );
}
