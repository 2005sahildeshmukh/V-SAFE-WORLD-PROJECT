const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'trainings.json');
const trainings = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const updates = {
  "workplace-safety": {
    fullDescription: "The Workplace Safety training provides a comprehensive foundation in identifying, assessing, and controlling workplace hazards. Covering housekeeping standards, slip-trip-fall prevention, PPE usage, machine guarding, hand tool safety, material handling, and emergency procedures, this program is essential for building a safety-conscious workforce from day one.",
    modules: ["Workplace Hazard Identification", "Housekeeping & 5S Standards", "Slip, Trip & Fall Prevention", "PPE Selection & Proper Use", "Machine Guarding & Safety Devices", "Hand & Power Tool Safety", "Material Handling Best Practices", "Emergency Procedures & Reporting"],
    learningOutcomes: ["Identify common workplace hazards", "Maintain clean and organized work areas", "Select and use PPE correctly", "Follow safe machine operation procedures", "Report incidents and near-misses effectively"],
    targetAudience: ["All Employees", "New Joiners", "Contract Workers", "Supervisors", "Safety Officers"],
    duration: "4–8 Hours", certification: "V-Safe Workplace Safety Certificate",
    methodology: ["Classroom Training", "Workplace Walk-through", "Hazard Spotting Exercises", "PPE Demos", "Case Studies", "Assessment"],
    whyImportant: "Workplace injuries cost Indian industries thousands of crores annually. Basic workplace safety training prevents 60% of common injuries. The Factories Act mandates safety training for all workers. This foundational program is the first step toward zero-harm workplaces."
  },
  "permit-to-work": {
    fullDescription: "The Permit To Work (PTW) training covers the systematic management of high-risk activities through formal authorization procedures. Topics include hot work permits, confined space entry permits, excavation permits, electrical isolation permits, working at height permits, and multi-permit coordination. Participants learn to assess risks, define controls, authorize work, and close out permits safely.",
    modules: ["PTW System Overview & Principles", "Hot Work Permits", "Confined Space Entry Permits", "Excavation & Trenching Permits", "Electrical Isolation Permits", "Height Work Permits", "Multi-permit Coordination", "PTW Audit & Continuous Improvement"],
    learningOutcomes: ["Understand the purpose and structure of PTW systems", "Issue and manage various permit types correctly", "Assess risks and define control measures for each permit", "Coordinate overlapping permits safely", "Audit PTW compliance and drive improvements"],
    targetAudience: ["Permit Issuers", "Permit Receivers", "Supervisors", "Safety Officers", "Contractors"],
    duration: "4–8 Hours", certification: "V-Safe PTW Competency Certificate",
    methodology: ["Classroom Theory", "Permit Filling Exercises", "Scenario-based Practice", "Case Study Analysis", "Audit Simulation", "Written Assessment"],
    whyImportant: "Poorly managed permits are a leading cause of major industrial accidents. Studies show that 40% of maintenance-related fatalities involve inadequate permit-to-work procedures. A robust PTW system is required under OISD, PESO, and ISO 45001 standards."
  },
  "risk-assessment-hira-ea-i": {
    fullDescription: "The Risk Assessment - HIRA & EA&I training teaches systematic methods for Hazard Identification and Risk Assessment (HIRA) and Effect Analysis & Improvement (EA&I). Participants learn to identify workplace hazards, evaluate risk severity and likelihood, prioritize controls using the hierarchy of controls, and develop risk registers. Practical workshops apply these tools to real workplace scenarios.",
    modules: ["Risk Assessment Fundamentals", "Hazard Identification Techniques", "Risk Matrix & Scoring", "Hierarchy of Controls", "HIRA Methodology & Documentation", "Job Safety Analysis (JSA)", "Effect Analysis & Improvement", "Risk Register Development & Review"],
    learningOutcomes: ["Conduct systematic hazard identification", "Evaluate and score risks using risk matrices", "Apply the hierarchy of controls to mitigate risks", "Develop comprehensive HIRA documents", "Create and maintain risk registers"],
    targetAudience: ["Safety Officers", "Engineers", "Supervisors", "Managers", "Risk Assessment Teams"],
    duration: "8–16 Hours", certification: "V-Safe HIRA Practitioner Certificate",
    methodology: ["Classroom Theory", "Hazard Identification Walks", "Risk Matrix Workshops", "JSA Writing Practice", "Group HIRA Exercise", "Presentation & Assessment"],
    whyImportant: "Risk assessment is the foundation of all safety management systems. ISO 45001 and the Factories Act mandate documented risk assessments. Organizations with mature HIRA processes see 50% fewer incidents. Without systematic risk assessment, safety efforts are reactive rather than preventive."
  },
  "occupational-safety": {
    fullDescription: "The Occupational Safety training provides comprehensive coverage of workplace health and safety management aligned with ISO 45001, Factories Act, and OSHA standards. Covering safety management systems, incident investigation, safety auditing, legal compliance, contractor safety management, and safety culture development, this program prepares safety professionals and managers to build world-class OH&S programs.",
    modules: ["OH&S Management Systems (ISO 45001)", "Legal Framework — Factories Act & Rules", "Safety Policy & Objectives", "Incident Investigation & Root Cause Analysis", "Safety Audit & Inspection Techniques", "Contractor Safety Management", "Safety Performance Metrics & KPIs", "Safety Culture Assessment & Development"],
    learningOutcomes: ["Understand ISO 45001 OH&S management system requirements", "Navigate Indian safety legislation", "Investigate incidents using root cause analysis", "Conduct effective safety audits", "Develop and track safety KPIs"],
    targetAudience: ["Safety Officers", "Safety Managers", "Plant Managers", "HR Managers", "Compliance Officers"],
    duration: "16–24 Hours", certification: "V-Safe Occupational Safety Professional Certificate",
    methodology: ["Classroom Training", "Case Study Analysis", "Incident Investigation Practice", "Audit Simulation", "Group Projects", "Written Assessment"],
    whyImportant: "Occupational safety management is a legal requirement and a business imperative. Organizations with ISO 45001 certification see 40% fewer workplace incidents. The Factories Act imposes severe penalties for non-compliance including imprisonment. Effective OH&S management protects employees, assets, and organizational reputation."
  },
  "scaffolding-safety": {
    fullDescription: "The Scaffolding Safety training covers safe erection, use, inspection, and dismantling of scaffold systems. Topics include scaffold types, load calculations, foundation requirements, guardrail and toe board installation, scaffold tagging systems, inspection protocols, and fall protection for scaffold workers. Practical training on actual scaffold structures ensures hands-on competency.",
    modules: ["Scaffold Types & Applications", "Load Calculations & Capacity", "Foundation & Base Requirements", "Erection Sequence & Safety", "Guardrails, Toe Boards & Access", "Scaffold Tagging Systems (Green/Yellow/Red)", "Daily Inspection Protocols", "Dismantling Safety Procedures"],
    learningOutcomes: ["Identify different scaffold types and their applications", "Calculate scaffold load capacity", "Inspect scaffolds using tag systems", "Erect and dismantle scaffolds safely", "Implement fall protection on scaffolds"],
    targetAudience: ["Scaffold Erectors", "Scaffold Inspectors", "Construction Workers", "Supervisors", "Safety Officers"],
    duration: "8–16 Hours", certification: "V-Safe Scaffold Competency Certificate",
    methodology: ["Classroom Theory", "Scaffold Component ID", "Load Calculation Exercises", "Hands-on Erection Practice", "Inspection Walk-through", "Practical Assessment"],
    whyImportant: "Scaffold collapses and falls from scaffolds account for a significant proportion of construction fatalities. 70% of scaffold accidents are caused by improper erection or overloading. The Building & Construction Workers Act mandates trained scaffold erectors and inspectors."
  },
  "construction-safety": {
    fullDescription: "The Construction Safety training addresses the unique hazards of construction sites including fall protection, excavation safety, crane operations, concrete work, steel erection, demolition safety, and site traffic management. Aligned with BOCW Act, NBC, and IS standards, this program equips construction workers and supervisors with essential knowledge to work safely on dynamic, high-risk construction sites.",
    modules: ["Construction Site Hazard Overview", "Fall Protection Systems", "Excavation & Trenching Safety", "Crane & Lifting Safety", "Concrete & Formwork Safety", "Steel Erection Safety", "Construction Site Traffic Management", "BOCW Act Compliance"],
    learningOutcomes: ["Identify and mitigate construction-specific hazards", "Implement fall protection at construction sites", "Ensure safe excavation and trenching practices", "Manage construction site traffic safely", "Comply with BOCW Act requirements"],
    targetAudience: ["Construction Workers", "Site Supervisors", "Project Managers", "Safety Officers", "Contractors"],
    duration: "8–16 Hours", certification: "V-Safe Construction Safety Certificate",
    methodology: ["Classroom Training", "Site Safety Walk", "Hazard Identification Exercises", "PPE Demos", "Case Studies", "Practical Assessment"],
    whyImportant: "Construction is among the most dangerous industries with the highest fatality rates. The BOCW Act 1996 mandates safety training for all construction workers. Proper training reduces construction site accidents by up to 50% and is increasingly required by principal employers and project owners."
  },
  "disaster-preparedness": {
    fullDescription: "The Disaster Preparedness training equips organizations to plan for, respond to, and recover from natural and man-made disasters. Covering risk vulnerability assessment, emergency response planning, resource stockpiling, communication systems, business continuity planning, and coordination with NDMA/SDMA, this program ensures organizational resilience against earthquakes, floods, cyclones, and industrial disasters.",
    modules: ["Disaster Risk & Vulnerability Assessment", "Emergency Response Plan Development", "Resource Stockpiling & Inventory", "Communication Systems & Protocols", "Business Continuity Planning", "NDMA/SDMA Coordination", "Community Resilience Building", "Post-disaster Recovery Planning"],
    learningOutcomes: ["Assess organizational vulnerability to various disasters", "Develop comprehensive emergency response plans", "Establish effective disaster communication systems", "Create business continuity plans", "Coordinate with government disaster management agencies"],
    targetAudience: ["Safety Managers", "Facility Managers", "HR Teams", "Leadership", "ERT Members"],
    duration: "8–16 Hours", certification: "V-Safe Disaster Preparedness Certificate",
    methodology: ["Risk Assessment Workshop", "Plan Development Exercise", "Tabletop Simulations", "Communication Drills", "BCP Writing Workshop", "Group Presentation"],
    whyImportant: "India is among the world's most disaster-prone countries. The DM Act 2005 mandates disaster preparedness for all organizations. Companies with robust preparedness plans recover 4x faster from disasters and suffer 50% less financial impact."
  },
  "search-rescue": {
    fullDescription: "The Search & Rescue training prepares teams to locate, access, stabilize, and extract trapped or injured persons following structural collapses, confined space incidents, or natural disasters. Covering search techniques, breaching methods, shoring and cribbing, casualty stabilization, and extrication procedures, this intensive program builds capable internal rescue teams.",
    modules: ["Search Techniques & Strategies", "Building Collapse Assessment", "Breaching & Breaking Techniques", "Shoring & Cribbing for Stabilization", "Casualty Assessment & Stabilization", "Extrication Methods & Equipment", "Rope Rescue Basics", "Team Coordination & Communication"],
    learningOutcomes: ["Conduct systematic search operations", "Assess structural stability before entry", "Stabilize collapsed structures using shoring", "Extricate trapped casualties safely", "Coordinate multi-team rescue operations"],
    targetAudience: ["ERT Members", "Fire Brigade Teams", "Safety Officers", "Maintenance Teams", "Security Personnel"],
    duration: "16–40 Hours (Multi-day)", certification: "V-Safe Search & Rescue Competency Certificate",
    methodology: ["Classroom Theory", "Search Pattern Practice", "Breaching Exercises", "Shoring & Cribbing Practice", "Live Rescue Simulations", "Team Drills"],
    whyImportant: "In structural collapses and industrial incidents, the first 24-72 hours are critical. Internal rescue teams can begin operations immediately while external agencies mobilize. NDRF response times average 6+ hours for remote locations. Trained internal rescue teams save lives during this critical gap."
  },
  "mock-drill-earthquake-flood-hurricane": {
    fullDescription: "The Mock Drill program for earthquakes, floods, and hurricanes simulates natural disaster scenarios to test and validate your organization's emergency preparedness. Covering scenario design, warning system activation, shelter-in-place procedures, evacuation protocols, assembly management, medical response, and damage assessment, these drills build organizational muscle memory for real disaster response.",
    modules: ["Disaster Scenario Design & Planning", "Early Warning System Activation", "Earthquake: Drop-Cover-Hold Protocol", "Flood: Evacuation & Elevated Assembly", "Cyclone: Shelter-in-place Procedures", "Medical Triage & First Aid", "Damage Assessment & Reporting", "Post-drill Analysis & Improvement"],
    learningOutcomes: ["Respond correctly to earthquake, flood, and cyclone warnings", "Execute shelter-in-place and evacuation procedures", "Manage assembly points during natural disasters", "Perform post-disaster damage assessment", "Continuously improve disaster response plans"],
    targetAudience: ["All Employees", "ERT Members", "Floor Wardens", "Facility Managers", "Safety Officers"],
    duration: "4–8 Hours per Scenario", certification: "V-Safe Mock Drill Completion Report",
    methodology: ["Scenario Briefing", "Full-scale Simulation", "Timed Response Metrics", "Medical Response Drill", "Damage Assessment Exercise", "Debrief & Gap Analysis"],
    whyImportant: "India experiences frequent earthquakes, floods, and cyclones. The DM Act 2005 mandates regular disaster mock drills. Organizations that drill quarterly reduce disaster response times by 60%. Mock drills reveal critical gaps in plans, equipment, and training that can only be discovered through practice."
  },
  "rescue-from-highrise-building": {
    fullDescription: "The Rescue From Highrise Building training covers specialized techniques for evacuating and rescuing persons from multi-story structures during fires, earthquakes, and other emergencies. Topics include descender device operation, rescue rope systems, ladder rescue, aerial platform use, smoke-filled stairwell navigation, and special needs evacuation from heights.",
    modules: ["Highrise Emergency Assessment", "Descender Device Operation", "Rescue Rope Systems & Knots", "Ladder Rescue Techniques", "Smoke-filled Stairwell Navigation", "Aerial Platform Rescue", "Special Needs Evacuation from Heights", "Multi-floor Coordination & Communication"],
    learningOutcomes: ["Operate controlled descent devices safely", "Set up rescue rope systems for highrise evacuation", "Navigate smoke-filled stairwells with casualties", "Coordinate multi-floor rescue operations", "Evacuate mobility-impaired persons from heights"],
    targetAudience: ["ERT Members", "Fire Brigade", "Building Safety Teams", "Facility Managers", "Security Personnel"],
    duration: "16–24 Hours (Multi-day)", certification: "V-Safe Highrise Rescue Certificate",
    methodology: ["Classroom Theory", "Descender Device Practice", "Rope System Setup", "Stairwell Navigation Drills", "Full-scale Building Drill", "Practical Assessment"],
    whyImportant: "With increasing urbanization, highrise buildings are everywhere. Fire services often lack equipment for buildings above 30 meters. Internal rescue capability is essential for occupant survival. NBC mandates rescue provisions for all highrise buildings."
  },
  "road-accident-investigation": {
    fullDescription: "The Road Accident Investigation training teaches systematic methods for investigating vehicle accidents to determine root causes and prevent recurrence. Covering scene documentation, evidence collection, witness interviewing, vehicle examination, road condition analysis, driver behavior assessment, and investigation report writing, this program builds competent internal accident investigators.",
    modules: ["Investigation Methodology & Principles", "Accident Scene Documentation", "Physical Evidence Collection", "Witness Interview Techniques", "Vehicle Examination & Damage Analysis", "Road & Environmental Condition Assessment", "Root Cause Analysis (5-Why, Fishbone)", "Investigation Report Writing"],
    learningOutcomes: ["Secure and document accident scenes systematically", "Collect and preserve physical evidence", "Conduct effective witness interviews", "Determine root causes using analytical tools", "Write comprehensive investigation reports with recommendations"],
    targetAudience: ["Safety Officers", "Fleet Managers", "Transport Supervisors", "HR Investigators", "Insurance Coordinators"],
    duration: "8–16 Hours", certification: "V-Safe Accident Investigation Certificate",
    methodology: ["Classroom Theory", "Scene Documentation Practice", "Evidence Collection Exercises", "Interview Role-plays", "Root Cause Analysis Workshop", "Report Writing Practice"],
    whyImportant: "Without thorough investigation, road accidents repeat. Organizations that investigate every road incident and implement corrective actions see 45% fewer repeat accidents. Investigation findings also protect organizations legally and support insurance claims."
  },
  "workplace-accident-investigation-industries-warehouse-construction": {
    fullDescription: "The Workplace Accident Investigation training covers systematic investigation of industrial, warehouse, and construction site accidents. Participants learn evidence preservation, timeline reconstruction, root cause analysis using multiple tools (5-Why, Fishbone, Fault Tree), corrective action development, and regulatory reporting requirements under the Factories Act, BOCW Act, and ESI Act.",
    modules: ["Investigation Trigger & Response Protocol", "Scene Preservation & Documentation", "Evidence Collection (Physical & Digital)", "Timeline & Sequence Reconstruction", "Root Cause Analysis Tools", "Human Factors Analysis", "Corrective & Preventive Action Development", "Regulatory Reporting (Factories Act, BOCW, ESI)"],
    learningOutcomes: ["Respond to workplace accidents with correct protocols", "Preserve and document accident scenes thoroughly", "Apply multiple root cause analysis techniques", "Develop effective corrective and preventive actions", "Complete mandatory regulatory accident reports"],
    targetAudience: ["Safety Officers", "Plant Managers", "Supervisors", "HR & Legal Teams", "Compliance Officers"],
    duration: "8–16 Hours", certification: "V-Safe Accident Investigation Professional Certificate",
    methodology: ["Classroom Theory", "Mock Accident Scene Investigation", "Root Cause Analysis Workshops", "CAPA Development Exercises", "Regulatory Reporting Practice", "Case Study Presentation"],
    whyImportant: "The Factories Act mandates reporting of serious accidents within 4 hours and investigation within 48 hours. Poor investigations lead to repeat incidents — organizations with robust investigation processes see 50% fewer repeat incidents. Investigation findings also protect against legal liability and regulatory penalties."
  }
};

// Handle duplicate evacuation-drills ID for disaster-management category
trainings.forEach(t => {
  if (updates[t.id]) {
    Object.assign(t, updates[t.id]);
  }
});

// Special handling for disaster-management evacuation-drills (different from fire-safety one)
const dmEvac = trainings.find(t => t.id === 'evacuation-drills' && t.category === 'disaster-management');
if (dmEvac) {
  Object.assign(dmEvac, {
    fullDescription: "The Disaster Evacuation Drills program focuses on large-scale evacuations triggered by natural disasters and major industrial emergencies. Unlike standard fire evacuation, these drills cover multi-building evacuation, community notification, transportation logistics, shelter management, and coordination with district disaster management authorities (DDMA). Scenarios include earthquake, flood, chemical release, and tsunami evacuations.",
    modules: ["Multi-building Evacuation Planning", "Disaster Warning & Notification Systems", "Transportation & Logistics Coordination", "Temporary Shelter Setup & Management", "Mass Casualty Triage", "DDMA & External Agency Coordination", "Vulnerable Population Evacuation", "Post-evacuation Accountability"],
    learningOutcomes: ["Plan and execute multi-building disaster evacuations", "Coordinate with district disaster management authorities", "Set up and manage temporary shelters", "Implement mass casualty triage procedures", "Account for all personnel post-evacuation"],
    targetAudience: ["ERT Leaders", "Facility Managers", "Safety Officers", "Security Teams", "All Employees"],
    duration: "8–16 Hours (Planning + Drill)", certification: "V-Safe Disaster Evacuation Certificate",
    methodology: ["Tabletop Planning Exercise", "Full-scale Multi-building Drill", "Transportation Coordination Drill", "Shelter Setup Practice", "DDMA Coordination Simulation", "Debrief & Gap Analysis"],
    whyImportant: "Disaster evacuations are exponentially more complex than fire evacuations. The DM Act 2005 mandates disaster evacuation plans and regular drills for all large establishments. Organizations in seismic zones, flood plains, or near hazardous installations must practice disaster-specific evacuations."
  });
}

fs.writeFileSync(dataPath, JSON.stringify(trainings, null, 2));
console.log('Batch 3b done: Updated remaining trainings');
