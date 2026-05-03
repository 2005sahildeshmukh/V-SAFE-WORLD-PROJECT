const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'trainings.json');
const trainings = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const updates = {
  "industrial-safety-mela": {
    fullDescription: "The Industrial Safety Mela is a large-scale interactive safety carnival designed to engage the entire workforce through exhibitions, live demos, competitions, and hands-on activities. Featuring PPE demonstrations, hazard identification challenges, safety quizzes, first aid stations, and expert talks, this event transforms safety training into an exciting, memorable experience that builds lasting safety culture.",
    modules: ["Safety Exhibition & Stall Setup", "PPE Demo & Fashion Show", "Hazard Identification Challenge", "Safety Quiz Competition", "First Aid Demo Station", "Fire Extinguisher Challenge", "Safety Poster & Slogan Contest", "Expert Talks & Panel Discussion"],
    learningOutcomes: ["Engage with safety concepts through hands-on experiences", "Identify workplace hazards through interactive challenges", "Build team-level safety accountability", "Strengthen safety culture across the organization"],
    targetAudience: ["All Employees", "Contract Workers", "Management", "Families"],
    duration: "1–2 Days (Event)", certification: "Participation Certificate",
    methodology: ["Interactive Stalls", "Competitions & Prizes", "Live Demos", "Cultural Activities", "Pledge Campaigns", "Photo/Video Documentation"],
    whyImportant: "Safety melas engage 5-10x more employees than classroom training. Organizations conducting annual safety melas report 35% improvement in safety compliance. This experiential approach makes safety personal and culturally embedded."
  },
  "behaviour-based-safety": {
    fullDescription: "Behaviour Based Safety (BBS) training teaches organizations to identify, observe, and correct at-risk behaviors before they result in incidents. Covering the ABC model (Antecedent-Behavior-Consequence), behavioral observation techniques, positive reinforcement strategies, safety coaching, and data-driven behavior analysis, this program transforms safety from a compliance exercise into a self-sustaining culture of peer accountability.",
    modules: ["BBS Principles & ABC Model", "At-risk vs Safe Behavior Identification", "Behavioral Observation Techniques", "Positive Reinforcement Strategies", "Safety Coaching Conversations", "BBS Data Collection & Analysis", "Peer-to-Peer Safety Feedback", "BBS Program Implementation"],
    learningOutcomes: ["Conduct structured behavioral safety observations", "Differentiate between at-risk and safe behaviors", "Use positive reinforcement to encourage safe behaviors", "Analyze BBS data to identify trends and interventions", "Implement a sustainable BBS program"],
    targetAudience: ["Supervisors", "Safety Officers", "Team Leaders", "All Employees", "BBS Champions"],
    duration: "8–16 Hours", certification: "V-Safe BBS Practitioner Certificate",
    methodology: ["Classroom Theory", "Observation Practice", "Role-play Exercises", "Data Analysis Workshops", "Field Observations", "Coaching Practice"],
    whyImportant: "96% of workplace incidents are caused by unsafe behaviors. BBS programs that focus on observation and positive reinforcement reduce incident rates by 40-75%. Unlike traditional safety approaches that react to incidents, BBS proactively eliminates at-risk behaviors before harm occurs."
  },
  "work-at-height": {
    fullDescription: "The Work At Height training covers all aspects of safely performing tasks above ground level — from ladder safety to rope access, scaffolding to aerial platforms. Participants learn fall hazard identification, fall protection systems (harness, lanyard, anchors), rescue planning, equipment inspection, and regulatory compliance. Hands-on harness donning, knot tying, and rescue drills ensure practical competency.",
    modules: ["Fall Hazard Identification", "Hierarchy of Fall Protection Controls", "Harness Selection, Inspection & Donning", "Lanyard & SRL Systems", "Anchor Point Selection & Installation", "Ladder & Scaffold Safety", "Aerial Work Platform Operation", "Rescue Planning & Self-rescue Techniques"],
    learningOutcomes: ["Identify and assess fall hazards in the workplace", "Select and use appropriate fall protection equipment", "Inspect harnesses, lanyards, and anchor points", "Plan and execute height rescue procedures", "Comply with IS 3521 and OSHA height work standards"],
    targetAudience: ["Height Workers", "Riggers", "Maintenance Teams", "Supervisors", "Safety Officers"],
    duration: "8–16 Hours", certification: "V-Safe Work at Height Competency Certificate",
    methodology: ["Classroom Theory", "Harness Donning Practice", "Knot Tying Drills", "Rescue Simulations", "Equipment Inspection", "Practical Assessment at Height"],
    whyImportant: "Falls from height are the #1 cause of workplace fatalities globally. In India, construction and maintenance sectors see hundreds of fall-related deaths annually. Proper training and equipment use prevents 95% of fall incidents. The Factories Act and Building & Construction Workers Act mandate height work training."
  },
  "electrical-safety": {
    fullDescription: "The Electrical Safety training program covers hazard recognition, safe work practices, and emergency response for electrical environments. Topics include electrical shock prevention, arc flash awareness, lockout/tagout procedures, PPE selection, grounding and bonding, permit systems, and compliance with IE Rules and IS standards. Practical exercises include safe meter use and rescue of electrocution victims.",
    modules: ["Electrical Hazard Recognition", "Shock & Electrocution Prevention", "Arc Flash Awareness & PPE", "Lockout/Tagout (LOTO) Basics", "Safe Use of Electrical Tools", "Grounding, Bonding & GFCI", "Electrical Work Permit Systems", "Rescue of Electrocution Victims"],
    learningOutcomes: ["Recognize electrical hazards in the workplace", "Apply safe work practices around electrical equipment", "Select appropriate electrical PPE", "Perform basic LOTO procedures", "Respond to electrical emergencies including electrocution rescue"],
    targetAudience: ["Electricians", "Maintenance Staff", "Engineers", "Supervisors", "Safety Officers"],
    duration: "8–16 Hours", certification: "V-Safe Electrical Safety Certificate",
    methodology: ["Classroom Theory", "Hazard Identification Walk", "PPE Selection Workshop", "LOTO Practice", "Rescue Simulation", "Written & Practical Assessment"],
    whyImportant: "Electrical accidents cause approximately 10,000 deaths annually in India. Arc flash incidents can generate temperatures of 35,000°F. IE Rules 1956 and IS 3043 mandate electrical safety training. Proper training prevents 90% of electrical incidents and ensures workers can respond to emergencies without becoming secondary victims."
  },
  "loto-training": {
    fullDescription: "The Lockout/Tagout (LOTO) Training program teaches employees to control hazardous energy sources during equipment maintenance, servicing, and repair. Covering energy source identification (electrical, mechanical, hydraulic, pneumatic, thermal, chemical), lockout device selection, LOTO procedure development, group lockout coordination, and periodic inspection requirements, this training prevents the release of stored energy that can cause severe injury or death.",
    modules: ["Hazardous Energy Sources & Types", "LOTO Regulatory Requirements", "Lockout Device Selection & Application", "Step-by-step LOTO Procedures", "Energy Isolation Verification", "Group & Complex LOTO Procedures", "Tagout-only Situations", "Periodic LOTO Inspection & Audit"],
    learningOutcomes: ["Identify all hazardous energy sources on equipment", "Apply correct lockout/tagout procedures", "Verify zero energy state before work begins", "Coordinate group lockout for complex maintenance", "Conduct LOTO program audits and inspections"],
    targetAudience: ["Maintenance Technicians", "Machine Operators", "Electricians", "Supervisors", "Safety Officers"],
    duration: "4–8 Hours", certification: "V-Safe LOTO Competency Certificate",
    methodology: ["Classroom Theory", "Energy Source Identification Walk", "Lock & Tag Application Practice", "Procedure Writing Workshop", "Hands-on Equipment LOTO", "Written & Practical Assessment"],
    whyImportant: "Failure to control hazardous energy accounts for 10% of serious workplace accidents. OSHA estimates that proper LOTO prevents 120 fatalities and 50,000 injuries annually in the US alone. The Factories Act mandates energy isolation procedures for all maintenance activities. LOTO training is non-negotiable for any organization with machinery."
  },
  "confined-space": {
    fullDescription: "The Confined Space training program covers safe entry, work, and rescue in confined spaces such as tanks, vessels, silos, pipelines, manholes, and pits. Participants learn atmospheric testing, ventilation requirements, entry permit systems, communication protocols, entrant/attendant/supervisor roles, and confined space rescue procedures. Practical drills in simulated confined spaces build real competency.",
    modules: ["Confined Space Identification & Classification", "Atmospheric Hazards & Gas Testing", "Ventilation Requirements & Monitoring", "Entry Permit System & Authorization", "Entrant, Attendant & Supervisor Roles", "Communication Protocols & Equipment", "PPE & Respiratory Protection", "Confined Space Rescue Procedures"],
    learningOutcomes: ["Identify and classify confined spaces", "Conduct atmospheric testing and interpret results", "Implement confined space entry permit systems", "Fulfill entrant, attendant, and supervisor responsibilities", "Execute confined space rescue procedures"],
    targetAudience: ["Maintenance Workers", "Tank Cleaners", "Utility Workers", "Supervisors", "Rescue Teams"],
    duration: "8–16 Hours", certification: "V-Safe Confined Space Entry Certificate",
    methodology: ["Classroom Theory", "Gas Detector Training", "Ventilation Setup Practice", "Permit Writing Workshop", "Simulated Confined Space Entry", "Rescue Drill Practice"],
    whyImportant: "Confined spaces are among the most dangerous workplace environments — over 60% of confined space fatalities are rescuers who enter without proper training. Atmospheric hazards (oxygen deficiency, toxic gases) can incapacitate a worker in seconds. Indian regulations under the Factories Act mandate confined space entry procedures and trained rescue teams."
  },
  "chemical-safety": {
    fullDescription: "The Chemical Safety training covers safe handling, storage, transportation, and disposal of hazardous chemicals in the workplace. Topics include chemical classification (GHS), Safety Data Sheet (SDS) interpretation, chemical compatibility, spill response procedures, PPE selection, exposure monitoring, and compliance with Factories Act, MSIHC Rules, and Chemical Accidents Rules.",
    modules: ["Chemical Hazard Classification (GHS)", "Safety Data Sheet (SDS) Interpretation", "Chemical Storage & Compatibility", "Safe Handling & Transfer Procedures", "PPE Selection for Chemical Hazards", "Chemical Spill Response & Cleanup", "Exposure Monitoring & Health Surveillance", "Regulatory Compliance (MSIHC, Chemical Accidents Rules)"],
    learningOutcomes: ["Classify chemicals using GHS pictograms and hazard statements", "Read and interpret Safety Data Sheets", "Store chemicals safely considering compatibility", "Respond to chemical spills with correct procedures", "Select appropriate PPE for chemical handling"],
    targetAudience: ["Chemical Handlers", "Laboratory Staff", "Warehouse Workers", "Supervisors", "Safety Officers"],
    duration: "8–16 Hours", certification: "V-Safe Chemical Safety Certificate",
    methodology: ["Classroom Theory", "SDS Reading Workshop", "Chemical Identification Exercises", "PPE Selection & Donning", "Spill Response Drills", "Written & Practical Assessment"],
    whyImportant: "Chemical exposure causes thousands of occupational illnesses annually. The Bhopal disaster remains a stark reminder of what can happen when chemical safety fails. MSIHC Rules 1989 and Chemical Accidents Rules 1996 mandate comprehensive chemical safety training. Proper training prevents 85% of chemical exposure incidents."
  }
};

let updated = 0;
trainings.forEach(t => { if (updates[t.id]) { Object.assign(t, updates[t.id]); updated++; } });
fs.writeFileSync(dataPath, JSON.stringify(trainings, null, 2));
console.log(`Batch 3a done: Updated ${updated} trainings`);
