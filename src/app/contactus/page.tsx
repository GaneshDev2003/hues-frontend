'use client';
import MyAppBar from '@/components/appbar';
import BottomNavBar from '@/components/bottomnav';
import { useRouter } from 'next/navigation';
function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="mx-4 my-8">
        <MyAppBar
          title="Contact us"
          onBackButtonClick={() => router.back()}
        ></MyAppBar>

        <div className="flex items-center h-screen justify-center justify-items-center">
          <h3 className="text-xl text-textcolor">
            Contact us at huesofchennai@gmail.com
          </h3>
        </div>
      </div>
      <BottomNavBar></BottomNavBar>
    </div>
  );
}

export default Page;
