const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'trainings.json');
const trainings = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const updates = {
  "road-safety-awareness": {
    fullDescription: "The Road Safety Awareness program educates employees on traffic rules, defensive driving principles, pedestrian safety, and the critical role of safety behaviors in preventing road accidents. Designed for organizations with fleet operations, daily commuters, and logistics teams, this training combines classroom theory with real-world accident analysis and behavioral interventions to create a safety-first driving culture.",
    modules: ["Indian Traffic Rules & Regulations", "Common Causes of Road Accidents", "Defensive Driving Principles", "Pedestrian & Two-wheeler Safety", "Fatigue & Distraction Management", "Seat Belt & Helmet Compliance", "Vehicle Pre-trip Inspection", "Road Safety Behavior Pledge"],
    learningOutcomes: ["Understand and follow Indian traffic regulations", "Identify and avoid common accident-causing behaviors", "Practice defensive driving techniques", "Conduct pre-trip vehicle safety inspections", "Promote road safety culture within the organization"],
    targetAudience: ["All Employees", "Fleet Drivers", "Logistics Teams", "Delivery Personnel", "Safety Officers"],
    duration: "4–8 Hours",
    certification: "V-Safe Road Safety Certificate",
    methodology: ["Classroom Presentations", "Accident Case Study Analysis", "Video Demonstrations", "Interactive Quizzes", "Behavioral Pledge Programs", "Pre & Post Assessments"],
    whyImportant: "India accounts for 11% of global road accident deaths with over 1.5 lakh fatalities annually. Road accidents are the leading cause of death for employees aged 18-45. For organizations with fleet operations, road safety training can reduce accident rates by up to 40% and significantly lower insurance premiums, vehicle repair costs, and legal liability."
  },
  "defensive-driving-training-2w-4w-hmv": {
    fullDescription: "The Defensive Driving Training program covers vehicle-specific defensive techniques for two-wheelers (2W), four-wheelers (4W), and heavy motor vehicles (HMV). Participants learn hazard perception, safe following distances, blind spot management, adverse weather driving, night driving techniques, and emergency maneuvers. The program includes both classroom theory and practical behind-the-wheel assessments to build measurable driving competency.",
    modules: ["Defensive Driving Philosophy & Mindset", "Hazard Perception & Risk Assessment", "Two-wheeler Specific Techniques", "Four-wheeler Defensive Strategies", "HMV Safe Operating Procedures", "Night & Adverse Weather Driving", "Emergency Braking & Evasive Maneuvers", "Road Rage & Aggressive Driver Management"],
    learningOutcomes: ["Apply the Smith System of defensive driving", "Perceive and respond to road hazards proactively", "Execute emergency braking and evasive maneuvers safely", "Drive safely in adverse weather and night conditions", "Manage interactions with aggressive drivers"],
    targetAudience: ["Company Drivers", "Fleet Operators", "Sales Field Teams", "Logistics Personnel", "Executive Chauffeurs"],
    duration: "8–16 Hours (Theory + Practical)",
    certification: "V-Safe Defensive Driving Certificate",
    methodology: ["Classroom Theory", "Driving Simulator Exercises", "Behind-the-wheel Assessment", "Hazard Perception Tests", "Video Analysis", "Practical Driving Evaluation"],
    whyImportant: "Defensive driving training reduces accident rates by 30-50% according to NSC studies. For organizations operating vehicle fleets, this directly translates to reduced insurance claims, lower vehicle maintenance costs, fewer worker compensation claims, and most importantly — saved lives. Many corporates now mandate defensive driving certification for all employees who drive on company business."
  },
  "emergency-vehicle-training": {
    fullDescription: "The Emergency Vehicle Training program prepares drivers of ambulances, fire trucks, rescue vehicles, and other emergency response vehicles to operate safely under high-pressure conditions. Covering emergency vehicle dynamics, siren and light protocols, intersection navigation, convoy procedures, and patient transport considerations, this specialized training ensures rapid response without compromising safety.",
    modules: ["Emergency Vehicle Dynamics & Handling", "Siren & Emergency Light Protocols", "High-speed Intersection Navigation", "Convoy & Multi-vehicle Operations", "Patient Transport Safety", "Route Planning & GPS Navigation", "Vehicle Pre-check & Maintenance", "Legal Aspects of Emergency Driving"],
    learningOutcomes: ["Operate emergency vehicles safely at elevated speeds", "Navigate intersections with proper siren/light usage", "Transport patients without aggravating injuries", "Plan optimal emergency response routes", "Maintain emergency vehicles in response-ready condition"],
    targetAudience: ["Ambulance Drivers", "Fire Truck Operators", "Emergency Response Teams", "Plant Emergency Vehicles", "Security Vehicle Operators"],
    duration: "16–24 Hours (Multi-day)",
    certification: "V-Safe Emergency Vehicle Operator Certificate",
    methodology: ["Classroom Theory", "Vehicle Dynamics Training", "Controlled Track Exercises", "Route Navigation Drills", "Patient Transport Simulation", "Practical Driving Assessment"],
    whyImportant: "Emergency vehicle accidents during response are alarmingly common — and often fatal. Proper training reduces emergency vehicle collision rates by up to 60%. In India, where traffic conditions are challenging, specialized training ensures that emergency responses save lives rather than create additional casualties. This training is essential for any organization operating emergency response vehicles."
  },
  "hazardous-material-vehicles-training": {
    fullDescription: "The Hazardous Material Vehicles Training program covers safe transportation of dangerous goods including flammable liquids, corrosive chemicals, compressed gases, radioactive materials, and toxic substances. Participants learn HAZCHEM classification, vehicle placarding, loading/unloading procedures, spill response, route planning for hazmat transport, and compliance with Motor Vehicles Act and PESO regulations.",
    modules: ["HAZCHEM Classification & UN Numbering", "Vehicle Placarding & Documentation", "Safe Loading & Unloading Procedures", "Spill Prevention & Containment", "Emergency Response for Hazmat Incidents", "Route Planning & Restricted Zones", "PPE for Hazmat Transport", "Regulatory Compliance (PESO, CMV Rules)"],
    learningOutcomes: ["Classify hazardous materials and apply correct UN numbers", "Placard vehicles and prepare transport documentation", "Load and unload hazardous materials safely", "Respond to spills and leaks during transport", "Comply with all applicable hazmat transport regulations"],
    targetAudience: ["Tanker Drivers", "Chemical Transport Operators", "Logistics Managers", "Safety Officers", "Warehouse Personnel"],
    duration: "8–16 Hours",
    certification: "V-Safe Hazmat Transport Certificate",
    methodology: ["Classroom Theory", "Hazmat Identification Exercises", "PPE Donning & Doffing Practice", "Spill Response Drills", "Documentation Workshops", "Practical & Written Assessment"],
    whyImportant: "Hazmat transport incidents can cause mass casualties, environmental contamination, and enormous financial liability. Indian regulations under PESO and CMV Rules mandate trained personnel for all dangerous goods transport. Proper training prevents the 70% of hazmat incidents caused by human error and protects your drivers, the public, and the environment."
  },
  "mhe-training-forklift-bopt-reach-truck-eot-crane-hydra": {
    fullDescription: "The Material Handling Equipment (MHE) Training program covers safe operation of forklifts, Battery Operated Pallet Trucks (BOPT), reach trucks, Electric Overhead Traveling (EOT) cranes, mobile cranes, and hydra cranes. Participants learn pre-operation inspection, load capacity calculation, safe maneuvering, pedestrian safety, stacking procedures, and maintenance protocols. Practical training on actual equipment with skill assessment ensures operator competency.",
    modules: ["MHE Types & Operating Principles", "Pre-operation Inspection Checklists", "Load Capacity Calculation & Load Charts", "Safe Maneuvering & Stacking Techniques", "Pedestrian Safety & Traffic Management", "Battery Maintenance & Charging Safety", "Crane Rigging & Signaling", "Emergency Procedures & Tip-over Prevention"],
    learningOutcomes: ["Conduct thorough pre-operation equipment inspections", "Calculate safe load capacities using load charts", "Operate MHE safely in warehouse and plant environments", "Manage pedestrian-MHE interaction zones", "Respond correctly to equipment malfunctions and tip-overs"],
    targetAudience: ["MHE Operators", "Warehouse Staff", "Crane Operators", "Supervisors", "Safety Officers"],
    duration: "16–40 Hours (Equipment-specific)",
    certification: "V-Safe MHE Operator License",
    methodology: ["Classroom Theory", "Equipment Walk-around Training", "Supervised Practical Operation", "Load Handling Exercises", "Obstacle Course Navigation", "Skills Assessment & Certification"],
    whyImportant: "Forklift and crane accidents are among the most severe workplace incidents, often resulting in fatalities. OSHA reports that 70% of forklift accidents could be prevented with proper training. In India, the Factories Act mandates trained and certified operators for all lifting equipment. MHE training dramatically reduces collision, tip-over, and struck-by incidents while improving operational efficiency."
  },
  "simulator-vr-training": {
    fullDescription: "The Simulator & VR Training program uses cutting-edge virtual reality and advanced driving/equipment simulators to provide immersive, risk-free training experiences. Participants practice hazard response, emergency maneuvers, and equipment operation in photorealistic virtual environments that replicate real-world conditions including weather, traffic, and workplace hazards. Performance analytics provide detailed feedback for targeted skill improvement.",
    modules: ["VR Safety Induction Experience", "Driving Simulator — Hazard Perception", "Forklift/Crane VR Operation", "Emergency Response VR Scenarios", "Confined Space VR Walkthrough", "Height Work VR Simulation", "Fire Emergency VR Experience", "Performance Analytics & Feedback"],
    learningOutcomes: ["Experience realistic hazard scenarios without actual risk", "Build muscle memory for emergency responses", "Improve hazard perception reaction times", "Identify personal skill gaps through data analytics", "Gain confidence before operating real equipment"],
    targetAudience: ["New Employees", "Equipment Operators", "Drivers", "Safety Trainees", "All Employees"],
    duration: "2–8 Hours (Module-specific)",
    certification: "V-Safe VR Training Completion Certificate",
    methodology: ["VR Headset Sessions", "Driving Simulator Exercises", "360° Video Experiences", "Performance Data Review", "Debriefing & Coaching", "Skill Gap Analysis"],
    whyImportant: "VR training improves knowledge retention by 75% compared to classroom training and reduces training injuries to zero. It allows employees to experience dangerous scenarios — fires, chemical spills, equipment failures — without any real risk. Organizations using VR training report 40% faster skill development and significantly higher engagement. This is the future of safety training."
  },
  "journey-risk-management": {
    fullDescription: "The Journey Risk Management (JRM) program provides a systematic approach to identifying, assessing, and mitigating risks associated with work-related travel. Covering journey planning, route risk assessment, driver fitness protocols, vehicle standards, fatigue management, lone worker safety, and journey monitoring systems, this program ensures every work-related journey is planned and executed with safety as the top priority.",
    modules: ["Journey Risk Assessment Framework", "Route Risk Profiling & Mapping", "Driver Fitness & Fatigue Management", "Vehicle Selection & Safety Standards", "Journey Authorization Process", "Real-time Journey Monitoring", "Lone Worker & Remote Area Safety", "Incident Reporting & Analysis"],
    learningOutcomes: ["Conduct systematic journey risk assessments", "Plan routes considering risk profiles and alternatives", "Implement driver fitness and fatigue management protocols", "Set up journey monitoring and check-in systems", "Investigate and learn from journey-related incidents"],
    targetAudience: ["Fleet Managers", "Safety Officers", "Field Sales Teams", "Logistics Coordinators", "Traveling Employees"],
    duration: "4–8 Hours",
    certification: "V-Safe JRM Certificate",
    methodology: ["Risk Assessment Workshops", "Route Mapping Exercises", "Case Study Analysis", "Journey Planning Practice", "Technology Demos (GPS/Telematics)", "Group Discussion & Policy Review"],
    whyImportant: "Work-related road accidents account for over 30% of all occupational fatalities. Journey Risk Management is a cornerstone requirement for organizations operating under ISO 45001 and is increasingly mandated by oil & gas, mining, and logistics sectors. Implementing JRM reduces road accident rates by up to 50% and demonstrates due diligence in employee safety."
  },
  "road-show-program": {
    fullDescription: "The Road Show Program is an engaging, large-scale road safety awareness campaign designed to reach maximum employees and community members through interactive exhibitions, live demonstrations, competitions, and pledge activities. Featuring crash simulators, drunk driving goggles, VR experiences, safety quizzes, and expert talks, this program creates a lasting impact on road safety attitudes and behaviors.",
    modules: ["Road Safety Exhibition Setup", "Crash & Rollover Simulator Experience", "Drunk Driving Goggle Demonstration", "VR Hazard Experience Stations", "Safety Quiz & Competition", "Expert Talk & Panel Discussion", "Road Safety Pledge Campaign", "Data Collection & Impact Assessment"],
    learningOutcomes: ["Experience the impact of crashes through simulators", "Understand impaired driving effects firsthand", "Commit to safe driving through pledge programs", "Engage with road safety through interactive activities", "Spread road safety awareness in the community"],
    targetAudience: ["All Employees & Families", "Community Members", "School & College Students", "Contract Workers", "Fleet Drivers"],
    duration: "1–3 Days (Event Format)",
    certification: "Participation Certificate",
    methodology: ["Interactive Exhibition Stalls", "Live Demonstrations", "Simulator Experiences", "Competitions & Prizes", "Pledge Programs", "Social Media Campaigns"],
    whyImportant: "Traditional classroom training reaches limited audiences. Road show programs can engage thousands of people in a single event, creating a viral safety culture effect. Studies show that experiential learning through simulators and hands-on activities creates 3x stronger behavioral change compared to lectures. This is the most impactful way to launch a company-wide road safety transformation."
  },
  "road-accident-mock-drill": {
    fullDescription: "The Road Accident Mock Drill program simulates realistic road accident scenarios to test and improve your organization's accident response capabilities. Covering accident scene management, casualty extraction, first aid administration, traffic management, police and ambulance coordination, and evidence preservation, this program ensures your teams can respond effectively to real road accidents involving company vehicles or employees.",
    modules: ["Mock Drill Scenario Planning", "Accident Scene Safety & Management", "Casualty Extraction Techniques", "On-scene First Aid & Triage", "Traffic Control & Scene Protection", "Emergency Services Coordination", "Evidence Preservation & Documentation", "Post-drill Debrief & Improvement"],
    learningOutcomes: ["Secure and manage a road accident scene", "Extract casualties safely from damaged vehicles", "Administer critical first aid at accident sites", "Coordinate effectively with emergency services", "Document and preserve accident scene evidence"],
    targetAudience: ["ERT Members", "Fleet Drivers", "Safety Officers", "Security Personnel", "First Aid Teams"],
    duration: "4–8 Hours (Planning + Drill + Debrief)",
    certification: "V-Safe Mock Drill Completion Report",
    methodology: ["Scenario Design Workshop", "Full-scale Road Accident Simulation", "Casualty Extraction Practice", "First Aid Station Setup", "Multi-agency Coordination Drill", "Video Debrief & Gap Analysis"],
    whyImportant: "The 'Golden Hour' after a road accident is critical — proper first response during this period can reduce fatalities by up to 50%. Most road accident fatalities in India occur due to delayed or improper first response rather than the severity of the crash itself. Mock drills prepare your teams to be effective first responders who can save lives at the scene."
  },
  "engagement-activity-drunk-busters-plant-safety-mela": {
    fullDescription: "The Engagement Activity program featuring Drunk Busters and Plant Safety Mela creates a fun, interactive, and memorable safety learning experience. Drunk Busters goggles simulate alcohol impairment effects on coordination, reaction time, and judgment, while the Safety Mela format includes safety-themed games, quizzes, poster competitions, skit performances, and equipment demonstrations — all designed to make safety education engaging and culturally relevant.",
    modules: ["Drunk Buster Goggle Experience", "Impairment Effect Demonstrations", "Safety Quiz & Competitions", "Poster & Slogan Competitions", "Safety Skit Performances", "PPE Fashion Show", "Equipment Safety Demos", "Safety Pledge & Commitment Wall"],
    learningOutcomes: ["Experience firsthand how alcohol impairs driving ability", "Understand the dangers of impaired driving and working", "Engage with safety concepts through fun activities", "Build team camaraderie around safety culture", "Create lasting behavioral commitment to safety"],
    targetAudience: ["All Employees", "Contract Workers", "Family Members", "New Joiners", "Management & Leadership"],
    duration: "Half Day to Full Day Event",
    certification: "Participation Certificate",
    methodology: ["Drunk Buster Goggle Stations", "Interactive Games & Activities", "Competitions with Prizes", "Live Demonstrations", "Cultural Performances", "Photo & Social Media Engagement"],
    whyImportant: "Safety engagement events achieve what mandatory trainings often cannot — they make safety personal, fun, and culturally embedded. Organizations that combine formal training with engagement activities report 60% higher safety behavior compliance. The Drunk Buster experience is particularly impactful, as 95% of participants report it permanently changed their attitude toward drinking and driving."
  }
};

let updated = 0;
trainings.forEach(t => {
  if (updates[t.id]) {
    Object.assign(t, updates[t.id]);
    updated++;
  }
});

fs.writeFileSync(dataPath, JSON.stringify(trainings, null, 2));
console.log(`Batch 2 done: Updated ${updated} trainings (Road Safety)`);
