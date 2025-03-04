import React from "react";
import {profile} from "../assets/images";
import ProjectsCard from "../components/ProjectsCard";
import { projects } from "../constants";
import QuoteCard from "../components/QuoteCard";
import ThanksCrad from "../components/ThanksCrad";
import FavouriteFiction from "../components/FavouriteFiction";
import LanguagesCard from "../components/LanguagesCard";

export default function Home(){
  return(
    <section className="bg-white dark:bg-base-100 text-slate-900 dark:text-slate-200 w-full pb-[15%] md:pb-0 md:ml-[10%] min-h-full md:w-[90%] md:h-full md:flex mx-auto pt-3">
      <div className="md:w-[70%] md:h-full">
        <div className="p-1 md:m-5">
          <div className=" flex justify-center items-center flex-col md:flex-row ">
            <div className="md:p-2 text-cente">
              <img src={profile} alt="Profile" className="  rounded-full border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-br from-slate-800 to-slate-900 w-[150px]" />
            </div>
            <div className="p-2 text-center md:text-left">
              <h4 className="font-poppins font-semibold text-3xl">Hi, I'm
                <span className="text-blue-500 "> Sahil Jada</span>
              </h4>  
              <h1 className="font-poppins font-semibold text-4xl">A <span className="text-teal-600">Full-Stack </span> Dev
              </h1>
            </div>
          </div>
          <div className="w-full h-[20%] p-4">
            <hr className="border-t border-gray-300 w-[90%] mx-auto" />
            <div className="flex justify-center items-center m-3 p-5 gap-10">            
              <div className="w-7">
                <a href="https://github.com/sxhilx">
                  <svg className="fill-slate-800 dark:fill-slate-300 cursor-pointer hover:scale-150 transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
              </div>
              <div className="w-7 ">
                <a href="https://x.com/sxhilxx">
                  <svg className="fill-slate-800 dark:fill-slate-300 cursor-pointer hover:scale-150 transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </a>
              </div>
              <div className="w-7 ">
                <a href="https://www.linkedin.com/in/sahiljada/">
                  <svg className="fill-slate-800 dark:fill-slate-300 cursor-pointer hover:scale-150 transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
              <div className="w-7 ">
                <a href="mailto:jadasahil06@gmail.com">
                <svg className="fill-slate-800 dark:fill-slate-300 cursor-pointer hover:scale-150 transition" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </a>
              </div>
            </div>
            <hr className="border-t border-gray-300 w-[90%] mx-auto" />
          </div>
          
          <div className="p-4">
            <h2 className="text-xl font-poppins font-medium m-4">Short Bio</h2>
            <p className="text-lg font-poppins font-normal m-4">Hi, I'm Sahil, My friends like to call me Sammy (no idea why), I'm currently based in 
              <a href="https://maps.app.goo.gl/LqTw9bkeTMbtnw799">
              <span className="text-teal-500 hover:text-teal-600"> South Africa</span>
              </a>              
              , studying a BSc in Information technology at 
              <span className="text-teal-500 hover:text-teal-600">
                <a href="https://www.richfield.ac.za/"> Richfield Institue of technology</a>
              </span>. I personally love coding, and nothing can stop me from learning more and more about the tech world and developing what I love. I'm a big fan of open-source projects, so everything I build, I share on 
              <a href="https://github.com/sxhilx">
              <span className="text-teal-500 hover:text-teal-600"> GitHub.</span>
              </a>
            </p>
          </div>
          <div className="  p-4">
            <h2 className="text-xl font-poppins font-medium m-4">Latest Projects</h2>
            
            <div className="md:m-4 gap-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {projects.slice(0, 2).map((project)=> (
                      <ProjectsCard key={project.title} {...project} />
                  ))}
                
              </div>   
          
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-poppins font-medium ml-4">Let's Connect</h2>
            <p className="text-lg font-poppins font-normal m-4">
              Shoot me an  
              <a href="mailto:jadasahil06@gmail.com">
                <span className="text-teal-500 hover:text-teal-600"> email
                </span>
              </a>  or <a href="https://x.com/sxhilxx"><span className="text-teal-500 hover:text-teal-600"> DM </span></a> me on my socials. Let's get to know each other! I'd love to collaborate and chat about anything tech-related. Whether it's brainstorming ideas, working on exciting projects, or just sharing insights, I'm always up for a good conversation. Don't hesitate to reach out—I can't wait to connect with you!
            </p>
          </div>
          
        </div>        
      </div>
      <div className="md:w-[30%] md:h-full md:mt-[7%] md:mr-3">
        <aside >
          <div className="my-8">
            <QuoteCard />
          </div>
          <div className="my-8">
            <LanguagesCard/>
          </div>
          
          <div className="my-8">
            <FavouriteFiction />
          </div>

          <div className="my-8">
            <ThanksCrad label={"View my Projects"} path={'/projects'}/>
          </div>
          
        </aside>
      </div>
    </section>
    
  )
}