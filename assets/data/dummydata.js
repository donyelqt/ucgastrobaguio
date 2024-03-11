import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ cuccessful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
]
export const services = [
  {
    id: 1,
    title: "Baguio General Hospital and Medical Center",
    cover: "./bghmc.png",
    desc: [{ text: "Medical Service" }, { text: "Cancer Center" }, { text: "Center for Diagnostic and Therapeutic Nuclear Medicine" }, { text: "Dental Department" }, { text: "Family and Community Medicine" }, { text: "HIV/AIDS Core Team (HACT)" }, { text: "Neuroscience" }, { text: "Obstetrics and Gynecology" }, { text: "Ophthalmology" }, { text: "Otorhinolaryngology- Head and Neck Surgery" }, { text: "Outpatient Department" }, { text: "Pathology" }, { text: "Psychiatry" }, { text: "Radiation Oncology" }, { text: "Radiology" }, { text: "Rehabilitation Medicine" }, { text: "Under Five Clinic" }, { text: "Women and Children Protection Unit" }, { text: "Cancer Center" }, { text: "Nursing Service" }, { text: "Professional and Allied Health Service Health Information Management Department" }, { text: "Medical Social Work Department" }, { text: "Nutrition & Dietetics" }, { text: "Pharmacy" },],
  },
  {
    id: 2,
    title: "Saint Louis University - Hospital of the Sacred Heart",
    cover: "./slusacred.png",
    desc: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
  },
  {
    id: 3,
    title: "Notre Dame de Chartres Hospital",
    cover: "./notre.png",
    desc: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
  },
  {
    id: 4,
    title: "Pines City Doctors Hospital",
    cover: "./pines.jpg",
    desc: [{ text: "Pathology" }, { text: "Medicine" }, { text: "General Surgery" }, { text: "OB-Gyne" }, { text: "Ambulance services" }, { text: "Hemodialysis" }, { text: "Anesthesia" }, { text: "Occupational Medicine" }, { text: "Rehabilitation Medicine" }, { text: "Dentistry" }, { text: "General Pediatrics" }, { text: "Radiology" }, ],
  },
]
export const reviews  = [
  {
    id: 1,
    name: "JANCER",
    cover: "./profile.png",
    post: "Saint Louis University - Sacred Heart of the Hospitals (Patients)",
    desc: "The doctors were profesionals and good on taking care of the patients.",
  },
  {
    id: 2,
    name: "N/A",
    cover: "./profile.png",
    post: "",
    desc: "",
  },
  {
    id: 3,
    name: "N/A",
    cover: "./profile.png",
    post: "",
    desc: "",
  },
  {
    id: 4,
    name: "N/A",
    cover: "./profile.png",
    post: "",
    desc: "",
  },
]
export const hospitals = [
  {
    id: 1,
    title: "Baguio General Hospital and Medical Center",
    cover: "./bgh.jpg",
    catgeory: "PUBLIC MEDICAL INSTITUTION.",
  },
  {
    id: 2,
    title: "Saint Louis University - Hospital of the Sacred Heart",
    catgeory: "PRIVATE MEDICAL INSTITUTION.",
    cover: "./slu.jpg",
  },
  {
    id: 3,
    title: "Notre Dame de Chartres Hospital",
    cover: "./notre.jpg",
    catgeory: "PRIVATE MEDICAL INSTITUTION.",
  },
  {
    id: 4,
    title: "Pines City Doctors Hospital",
    cover: "./pines1.jpg",
    catgeory: "PRIVATE MEDICAL INSTITUTION.",
  },
]
export const brand = [
  {
    id: 1,
    cover: "",
  },
  {
    id: 2,
    cover: "",
  },
  {
    id: 3,
    cover: "",
  },
  {
    id: 4,
    cover: "",
  },
  {
    id: 5,
    cover: "",
  },
  {
    id: 6,
    cover: "",
  },
]
export const blogdata = [
  {
    id: 1,
    title: "SAFE WATER DRINKING ORDINANCE",
    cover: "./safewaterdrinkingordiance.jpg",
    catgeory: "",
    date: "BAGUIO CITY PUBLIC INFORMATION OFFICE / JANUARY 24, 2024",
  },
  {
    id: 2,
    title: "9 practical tips to help ease the discomfort brought about by gastroenteritis.",
    cover: "./9tipsforgastro.jpg",
    catgeory: "",
    date: "BAGUIO CITY GUIDE / JANUARY 10, 2024",
  },
  {
    id: 3,
    title: "CITY HAS BEEN VERY TRUTHFUL AND TRANSPARENT ON DIARRHEA OUTBREAK.",
    cover: "./gastrooutbreak.jpg",
    catgeory: "",
    date: "BAGUIO CITY PUBLIC INFORMATION OFFICE / JANUARY 17, 2024",
  },
  {
    id: 4,
    title: "DIARRHEA CASES CLIMB TO 2,199",
    cover: "./casesrise.jpg",
    catgeory: "",
    date: "BAGUIO CITY PUBLIC INFORMATION OFFICE / JANUARY 11, 2024",
  },
]
export const teamdata = [
  {
    id: 1,
    title: "Doniele Arys Antonio",
    cover: "./Doniele Arys Ucgastro.jpg",
    post: "Tech Lead, Software Engineer, Project Manager, UI/UX Designer",
  },
  {
    id: 2,
    title: "Cedrick Bautista",
    cover: "Cedrick ucgastro.jpg",
    post: "Data Analyst, Writer, Logo Designer",
  },
  {
    id: 3,
    title: "Ian Paloga",
    cover: "ian ucgastro.jpg",
    post: "Business Analyst, Writer",
  },
]

import {DonieleArysUcgastroCover} from '@/public/Doniele Arys Ucgastro.jpg';
import Image from 'next/image';

export const teamdata1 = [
  {
    id: 1,
    title: "Doniele Arys Antonio",
    cover: <Image src={DonieleArysUcgastroCover} width='100' height='100' />,
    post: "Tech Lead | Software Engineer | Project Manager | UI/UX Designer",
  },
];
