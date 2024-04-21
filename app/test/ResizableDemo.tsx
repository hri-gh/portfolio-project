import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ResizableDemo() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="my-2 rounded-xl border"
        >
            <ResizablePanel defaultSize={100}>
            <h1 className="text-4xl text-center bg-black">Hello</h1>
                <div className="bg-violet-400 flex items-center justify-center p-6">

                        <ScrollArea>
                                Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the kings pillow, in his soup, even in the royal toilet. The king was furious, but he couldnt seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldnt help but laugh. And once they started laughing, they couldnt stop.
                        </ScrollArea>

                </div>
            </ResizablePanel>
            {/* <ResizableHandle /> */}
            {/* <ResizablePanel defaultSize={50}>
                <ResizablePanelGroup direction="vertical">

                    <ResizablePanel defaultSize={25}>
                        <div className="bg-gray-400 flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={75}>

                        <div className=" bg-green-400 flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel> */}
        </ResizablePanelGroup>
    )
}
