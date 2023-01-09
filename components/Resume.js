import { Tab } from "@headlessui/react";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {
  return (
    <Tab.Group>
      <Tab.List className="mb-6">
        <Tab className="border rounded-full focus:ring-2 border-indigo-600 focus:bg-indigo-50 focus:text-indigo-900 py-1 text-md px-8 mr-4">
          Education
        </Tab>
        <Tab className="border rounded-full focus:ring-2 border-indigo-600 focus:bg-indigo-50 focus:text-indigo-900 py-1 text-md px-8">
          Experience
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Education />
        </Tab.Panel>
        <Tab.Panel>
          <Experience />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
