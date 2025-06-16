import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
  <div
   className="h-[400px] aspect-square md:aspect-[2.4/1] overflow-hidden w-full bg-cover bg-center bg-no-repeat rounded-lg" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D')"
  }}>
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
        <h1 className="font-bold text-3xl sm:text-5xl text-black dark:text-white text-center">
          Become a Better React Developper
        </h1>
        <Input type="email" placeholder="Email" className="dark:bg-white" />
        <Button size={'lg'} className="w-full py-6 text-xl mt-4">
          Subscribe to Our News letter
        </Button>
      </div>
    </div>
  </div>);
}