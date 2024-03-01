import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ContainerScroll } from "@/components/ui/container-scrool-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { MacbookScroll } from "@/components/ui/mackbook";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import Anasayfa from "@/pages/home";


import Image from "next/image";


export default function Home() {

  const items = [
    {
      quote: "Benzer Ürün 1",
      name: "Ürimetre",
      title: "Bu ürün süper"
    },
    {
      quote: "Benzer Ürün 2",
      name: "Luxline Led",
      title: "Profesyonel ameliyathane ışığı"
    },
    {
      quote: "Medical innovation is the key to improving healthcare.",
      name: "Dr. Jane Smith",
      title: "Chief Medical Officer"
   },
   {
      quote: "Advancements in medical technology are transforming healthcare.",
      name: "Dr. John Doe",
      title: "Senior Surgeon"
   },
   {
      quote: "Innovative medical solutions are the future of healthcare.",
      name: "Dr. Emily Johnson",
      title: "Medical Researcher"
   },
   {
      quote: "Technology is the driving force behind medical advancements.",
      name: "Dr. Elizabeth Anderson",
      title: "Medical Technology Analyst"
   },
   {
      quote: "Medical technology is at the forefront of healthcare innovation.",
      name: "Dr. Robert White",
      title: "Medical Technology Strategist"
   },
    // Add more items as needed
 ];
 const users = [
  {
    name: "Dr. Jane Smith",
    designation: "Tayfun Durmaz",
    image: "/path/to/image1.jpg",
    badge: "M.D."
  },
  {
    name: "Dr. Jane Smith",
    designation: "Ahmet Kaleli",
    image: "/path/to/image1.jpg",
    badge: "M.D."
  },
  {
    name: "Dr. Jane Smith",
    designation: "Ahmet Arat",
    image: "/path/to/image1.jpg",
    badge: "M.D."
  },
  {
    name: "Dr. John Doe",
    designation: "Furkan Gönülal",
    image: "/path/to/image2.jpg",
    badge: "Ph.D."
  },

  
  // Add more users as needed
];
 const users2 = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];

const people = [
  {
    id: 1,
    name: "Furkan Gönülal",
    designation: "Software Engineer",
    image:"/furkan.jpg",
  },
  {
    id: 2,
    name: "Tayfun Durmaz",
    designation: "Product Manager",
    image:
      "/tayfun.jpg",
  },
  {
    id: 3,
    name: "Ahmet Kaleli",
    designation: "Data Scientist",
    image:
      "/kaleli.jpg",
  },
  {
    id: 4,
    name: "Ahmet Arat",
    designation: "UX Designer",
    image:
      "/ahmet.jpg",
  },
  {
    id: 5,
    name: "Emre Aykut",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Yardımcı Hakem",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

  const words = [
    {
      text: "Furkan",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Gönülal",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "ile",
    },
    {
      text: "mükemmel uygulamaları",
    },
    {
      text: "Keşfedin.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-4 mb-4">Cool</p>
      <div className="flex flex-row items-center justify-center mb-10 w-full mt-4">
      
      <AnimatedTooltip items={people}/>
    </div>

      <InfiniteMovingCards
        items={items}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="my-custom-class"
      />
      <TextGenerateEffect words="Insanity is doing the same thing over and over again and expecting results to change." className="mt-9 neutral-500" />
      <ContainerScroll 
      titleComponent="Title Of Component"
      users={users2} />

<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Fullstack Developer
      </p>
      <TypewriterEffectSmooth words={words} />
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Mail Gönder
        </button>
  
      </div>
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="I love you"
        revealText="Thats what she said"
      >
        <TextRevealCardTitle>
          Bazen sadece görmeniz gerekir.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Her şeyi her zaman göremeseniz bile.
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    </div>
    <div className="table w-full ...">
  <div className="table-header-group ...">
    <div className="table-row">
      <div className="table-cell text-left ...">Song</div>
      <div className="table-cell text-left ...">Artist</div>
      <div className="table-cell text-left ...">Year</div>
    </div>
  </div>
  <div className="table-row-group">
    <div className="table-row">
      <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
      <div className="table-cell ...">Malcolm Lockyer</div>
      <div className="table-cell ...">1961</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Witchy Woman</div>
      <div className="table-cell ...">The Eagles</div>
      <div className="table-cell ...">1972</div>
    </div>
    <div className="table-row">
      <div className="table-cell ...">Shining Star</div>
      <div className="table-cell ...">Earth, Wind, and Fire</div>
      <div className="table-cell ...">1975</div>
    </div>
  </div>
</div>
  

    </main>
  );
}

