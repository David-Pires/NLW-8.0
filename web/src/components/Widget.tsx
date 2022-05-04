import { ChatTeardropDots } from "phosphor-react";

import { Popover } from '@headlessui/react'
//Estado 
export function Widget() {   
  return (
    <Popover className="absolute bottom-4 right-5">
      <Popover.Panel>Mãe trás pão</Popover.Panel>
      <Popover.Button  className=" 
                          flex
                        bg-brand-500
                          rounded-full
                          px-3
                          h-12
                          text-white 
                          items-center
                          group                          
                          "
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
