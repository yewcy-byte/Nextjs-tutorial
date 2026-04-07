import { Card } from "@/components/Card";
import Link from "next/link";



export default function notifications() {
  return (
    <Card>
      
      <div> Main Notification</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    
    
    </Card>

  );
  }