import React from 'react'
import { Tabs } from 'flowbite-react'
function AboutTabs() {
  return (
    <>
      <Tabs.Group
  aria-label="Tabs with icons"
  style="underline"
>
  <Tabs.Item
    active
    icon={null}
    title="Education"
  >
    <p className="text-sm text-gray-500 dark:text-gray-400">
      <p>
        This is some placeholder content the 
        
        <span className="font-medium text-gray-800 dark:text-white">
          Profile tab's associated content
        </span>
        . Clicking
        another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling.
      </p>
    </p>
  </Tabs.Item>
  <Tabs.Item
    icon={null}
    title="Skills"
  >
    <p className="text-sm text-gray-500 dark:text-gray-400">
      <p>
        This is some placeholder content the 
        
        <span className="font-medium text-gray-800 dark:text-white">
          Dashboard tab's associated content
        </span>
        . Clicking
        another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling.
      </p>
    </p>
  </Tabs.Item>
  <Tabs.Item
    icon={null}
    title="Experience"
  >
    <p className="text-sm text-gray-500 dark:text-gray-400">
      <p>
        This is some placeholder content the 
        
        <span className="font-medium text-gray-800 dark:text-white">
          Settings tab's associated content
        </span>
        . Clicking
        another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the
        content visibility and styling.
      </p>
    </p>
  </Tabs.Item>
</Tabs.Group>
    </>
  )
}

export default AboutTabs
