import LeftPanel from "@/components/left-panel";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Calendar from "@/components/calendar";

export default async function Payments() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }


  return (
    <div className="flex flex-row h-screen">
      <div className="w-[320px] flex-shrink-0">
        <LeftPanel />
      </div>

      <div className="flex-1 h-full flex flex-col overflow-hidden">
        <Calendar />

        <div className="flex-1 flex flex-row overflow-hidden">
          {/* Updated Left Section */}
          <div className="flex-1 border-2 border-red-500 overflow-hidden p-4 flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Add Payment</h2>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
            </div>
          </div>

          {/* Right Section (Unchanged) */}
          <div className="flex-1 border-2 border-red-500 overflow-hidden p-4 flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Payment History</h2>
              <p>Month of September</p>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Left Section</h2>
                <p>Content for the left section goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
