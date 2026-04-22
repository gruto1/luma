"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>

      {/* Trigger Button */}
      <DropdownMenu.Trigger className="px-4 py-2 bg-black text-white rounded">
        Categories
      </DropdownMenu.Trigger>

      {/* Dropdown Content */}
      <DropdownMenu.Content className="bg-white shadow-lg rounded p-2 mt-2">

        <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer">
          Men
        </DropdownMenu.Item>

        <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer">
          Women
        </DropdownMenu.Item>

        <DropdownMenu.Item className="p-2 hover:bg-gray-100 cursor-pointer">
          Electronics
        </DropdownMenu.Item>

      </DropdownMenu.Content>

    </DropdownMenu.Root>
  );
}