import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-4">
      <Modal onClose={() => {}} title="test" description="test descrip" isOpen>
        {/* <UserButton afterSignOutUrl="/" /> */}
        children
      </Modal>
     
    </div>
  );
}
