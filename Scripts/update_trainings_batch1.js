const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'trainings.json');
const trainings = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const updates = {
  "first-aid-cpr-aed": {
    fullDescription: "The First Aid, CPR & AED course is specifically designed for modern industrial and corporate workplaces. Participants learn life-saving techniques including cardiopulmonary resuscitation (CPR), automated external defibrillator (AED) operation, wound management, fracture stabilization, burn treatment, and choking response. Our expert trainers deliver actionable knowledge through realistic simulations, manikin-based practice, and scenario drills tailored to your workplace hazards. This course meets OSHA, Red Cross, and Indian Factories Act requirements.",
    modules: ["Adult, Child & Infant CPR Techniques", "AED Operation & Maintenance", "Bleeding Control & Wound Management", "Fracture & Sprain Immobilization", "Burn & Electrical Injury Response", "Choking & Airway Obstruction", "Shock Management & Patient Assessment", "Medical Emergency Action Plans"],
    learningOutcomes: ["Perform CPR confidently on adults, children, and infants", "Operate an AED correctly in cardiac emergencies", "Manage bleeding, fractures, burns, and shock situations", "Develop and implement a workplace emergency action plan", "Recognize signs of stroke, heart attack, and anaphylaxis"],
    targetAudience: ["Safety Officers", "Floor Supervisors", "HR Personnel", "All Employees", "Emergency Response Teams"],
    duration: "8–16 Hours",
    certification: "V-Safe Certified + Optional Red Cross Alignment",
    methodology: ["Manikin-based CPR Practice", "AED Simulation Drills", "Scenario-based Assessments", "Video Case Studies", "Hands-on Bandaging Practice", "Written & Practical Evaluation"],
    whyImportant: "Cardiac arrest and workplace injuries can strike without warning. Studies show that immediate CPR doubles or triples survival rates. In India, the Factories Act 1948 mandates first aid provisions in every workplace. Equipping your workforce with certified first aid skills not only saves lives but also reduces response time, minimizes injury severity, and demonstrates organizational commitment to employee welfare."
  },
  "posh-awareness": {
    fullDescription: "The Prevention of Sexual Harassment (POSH) Awareness training provides comprehensive education on the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. This program covers the legal framework, identification of inappropriate behaviors, complaint mechanisms, Internal Committee (IC) formation and functioning, and creating a respectful workplace culture. Interactive case studies and role-play scenarios ensure participants understand their rights and responsibilities.",
    modules: ["Understanding the POSH Act 2013", "Types of Sexual Harassment — Quid Pro Quo & Hostile Environment", "Internal Committee (IC) Formation & Duties", "Complaint Filing & Investigation Process", "Bystander Intervention Strategies", "Creating a Respectful Workplace Culture", "Legal Consequences & Employer Liability"],
    learningOutcomes: ["Identify behaviors that constitute sexual harassment", "Understand the complete complaint and redressal mechanism", "Know the legal obligations of employers under the POSH Act", "Build confidence in reporting and bystander intervention", "Foster a safe and inclusive workplace environment"],
    targetAudience: ["All Employees", "HR Teams", "Internal Committee Members", "Managers & Supervisors", "Leadership Teams"],
    duration: "4–8 Hours",
    certification: "V-Safe POSH Compliance Certificate",
    methodology: ["Interactive Presentations", "Case Study Analysis", "Role-play Scenarios", "Group Discussions", "Q&A with Legal Experts", "Pre & Post Assessments"],
    whyImportant: "The POSH Act 2013 makes it mandatory for every organization with 10+ employees to conduct regular awareness training and constitute an Internal Committee. Non-compliance can result in penalties up to ₹50,000 and cancellation of business licenses. Beyond legal compliance, POSH training builds trust, improves employee retention, and creates a respectful work environment."
  },
  "women-health-safety": {
    fullDescription: "The Women Health & Safety program addresses the unique health and safety challenges faced by women in industrial and corporate environments. Covering topics from ergonomic considerations and PPE fitment to menstrual health awareness, workplace stress management, and safety during pregnancy, this training empowers female employees with knowledge and practical skills. The program also trains managers on creating supportive policies and inclusive safety practices.",
    modules: ["Workplace Ergonomics for Women", "PPE Selection & Proper Fitment", "Menstrual Health & Hygiene Awareness", "Pregnancy Safety Guidelines", "Self-defense Basics", "Stress & Mental Health Management", "Night Shift Safety Protocols", "Gender-sensitive Emergency Procedures"],
    learningOutcomes: ["Understand gender-specific workplace health risks", "Select and use properly fitted PPE", "Implement safe practices during pregnancy", "Manage workplace stress and mental health challenges", "Create inclusive safety policies"],
    targetAudience: ["Female Employees", "HR Managers", "Safety Officers", "Plant Managers", "Supervisors"],
    duration: "4–8 Hours",
    certification: "V-Safe Women Safety Certificate",
    methodology: ["Expert-led Workshops", "Group Discussions", "PPE Fitment Demos", "Health Screening Awareness", "Policy Review Exercises", "Interactive Q&A"],
    whyImportant: "With increasing female workforce participation in Indian industries, addressing gender-specific health and safety needs is both a legal requirement and an ethical imperative. Research shows that workplaces with inclusive safety programs see 25% fewer injuries among female workers. This training ensures compliance with the Maternity Benefit Act and various state-level regulations while fostering an equitable workplace."
  },
  "diet-nutrition": {
    fullDescription: "The Diet & Nutrition program educates employees on the critical connection between proper nutrition and workplace performance, safety, and well-being. Topics include balanced meal planning for shift workers, hydration strategies for physically demanding roles, managing dietary needs in extreme environments (heat/cold), and understanding how nutritional deficiencies increase accident risk. Practical meal prep demonstrations and personalized dietary guidance are included.",
    modules: ["Fundamentals of Balanced Nutrition", "Shift Work & Meal Timing Strategies", "Hydration for Physical & Heat-intensive Work", "Nutrition for Fatigue Prevention", "Managing Diabetes & Hypertension at Work", "Canteen & Cafeteria Health Standards", "Reading Food Labels & Making Smart Choices"],
    learningOutcomes: ["Plan balanced meals appropriate for their work schedule", "Maintain proper hydration during physically demanding shifts", "Understand how nutrition impacts alertness and accident prevention", "Manage chronic health conditions through dietary choices", "Advocate for healthier canteen options"],
    targetAudience: ["All Employees", "Shift Workers", "Canteen Staff", "HR & Welfare Officers", "Plant Managers"],
    duration: "2–4 Hours",
    certification: "V-Safe Wellness Certificate",
    methodology: ["Nutritionist-led Sessions", "Meal Planning Workshops", "Interactive Demos", "BMI & Health Assessments", "Dietary Counseling", "Take-home Guides"],
    whyImportant: "Poor nutrition directly impacts workplace safety — fatigued, dehydrated, or malnourished workers are significantly more prone to accidents. Studies show that nutritional interventions can reduce absenteeism by up to 20% and improve productivity by 15%. Investing in employee nutrition is one of the most cost-effective wellness strategies available."
  },
  "work-life-balance": {
    fullDescription: "The Work Life Balance program equips employees and managers with practical strategies to manage professional demands while maintaining personal well-being. Covering time management techniques, boundary setting, digital detox practices, stress reduction methods, and organizational policies that support balance, this training helps create a healthier, more productive, and engaged workforce. Interactive workshops and self-assessment tools make the learning immediately actionable.",
    modules: ["Time Management & Prioritization", "Setting Healthy Boundaries", "Digital Detox & Screen-time Management", "Stress Identification & Coping Mechanisms", "Mindfulness & Relaxation Techniques", "Manager's Role in Supporting Balance", "Organizational Policy Best Practices"],
    learningOutcomes: ["Apply proven time management frameworks to daily routines", "Set and communicate healthy boundaries at work", "Identify personal stress triggers and apply coping strategies", "Practice mindfulness techniques for better focus", "Design team-level work-life balance initiatives"],
    targetAudience: ["All Employees", "Managers & Team Leads", "HR Personnel", "Senior Leadership"],
    duration: "4–6 Hours",
    certification: "V-Safe Wellness Certificate",
    methodology: ["Self-assessment Tools", "Group Workshops", "Guided Meditation", "Goal-setting Exercises", "Case Studies", "Action Plan Development"],
    whyImportant: "Burnout costs Indian industries an estimated ₹1.5 lakh crore annually in lost productivity. Organizations that actively promote work-life balance see 21% higher profitability and 41% lower absenteeism. This training isn't just about employee happiness — it's a strategic investment in workforce sustainability and safety, as fatigued workers are far more likely to cause or suffer from workplace accidents."
  },
  "mental-health-stress-management": {
    fullDescription: "The Mental Health & Stress Management program provides comprehensive education on recognizing, managing, and preventing mental health issues in the workplace. Covering stress physiology, anxiety and depression awareness, workplace bullying prevention, resilience building, and crisis intervention, this training creates a mentally healthier and safer workplace. Participants learn practical coping techniques and managers gain skills in supportive leadership and mental health first aid.",
    modules: ["Understanding Workplace Stress & Its Impact", "Recognizing Anxiety, Depression & Burnout", "Resilience Building Techniques", "Workplace Bullying & Harassment Prevention", "Mental Health First Aid", "Crisis Intervention & Suicide Prevention Awareness", "Manager's Guide to Supportive Leadership", "Employee Assistance Programs (EAP) Awareness"],
    learningOutcomes: ["Recognize early signs of stress, anxiety, and depression in self and colleagues", "Apply practical stress management and resilience techniques", "Respond appropriately to a mental health crisis", "Create psychologically safe team environments", "Access and promote mental health support resources"],
    targetAudience: ["All Employees", "Managers & Supervisors", "HR Teams", "Safety Officers", "Union Representatives"],
    duration: "4–8 Hours",
    certification: "V-Safe Mental Health Awareness Certificate",
    methodology: ["Psychologist-led Sessions", "Stress Mapping Exercises", "Breathing & Relaxation Practice", "Role-play Scenarios", "Peer Support Training", "Confidential Self-assessments"],
    whyImportant: "Mental health issues account for 15% of the global burden of disease and cost employers billions in lost productivity. In safety-critical industries, stress and mental fatigue are contributing factors in over 60% of workplace accidents. WHO recommends every ₹1 invested in mental health returns ₹4 in improved health and productivity. This training is essential for creating a safe, productive, and compassionate workplace."
  },
  "ergonomics-postures": {
    fullDescription: "The Ergonomics & Postures training program teaches employees to optimize their physical work setup to prevent musculoskeletal disorders (MSDs), repetitive strain injuries, and chronic pain. Covering workstation assessment, proper lifting techniques, posture correction for desk and manual workers, tool and equipment ergonomics, and stretching routines, this hands-on training significantly reduces injury rates and improves comfort and productivity.",
    modules: ["Principles of Workplace Ergonomics", "Workstation Assessment & Setup", "Proper Lifting & Manual Handling Techniques", "Posture Correction for Desk Workers", "Ergonomics for Manual & Industrial Workers", "Stretching & Micro-break Routines", "Ergonomic Tool & Equipment Selection", "MSD Prevention & Early Warning Signs"],
    learningOutcomes: ["Assess and optimize personal workstation ergonomics", "Apply correct lifting and manual handling techniques", "Maintain proper posture during prolonged sitting or standing", "Implement micro-break and stretching routines", "Recognize early signs of musculoskeletal disorders"],
    targetAudience: ["Office Workers", "Warehouse & Factory Workers", "IT Professionals", "Supervisors", "Safety Officers"],
    duration: "4–6 Hours",
    certification: "V-Safe Ergonomics Certificate",
    methodology: ["Workstation Assessments", "Posture Analysis with Tools", "Hands-on Lifting Practice", "Stretching Demonstrations", "Before/After Evaluations", "Personalized Recommendations"],
    whyImportant: "Musculoskeletal disorders account for nearly 40% of all workplace injuries and are the leading cause of work-related disability. Poor ergonomics costs Indian industries an estimated ₹10,000+ per affected worker annually in medical expenses and lost productivity. Proper ergonomic training can reduce MSD incidence by up to 60% and provides one of the highest ROIs of any workplace safety intervention."
  },
  "fire-fighting-training": {
    fullDescription: "The Fire Fighting Training course comprehensively covers all fire hazards, including dedicated modules on fire extinguisher usage, fire hose operation, and emergency suppression systems. Participants learn fire chemistry, classification of fires (A, B, C, D, K), selection of appropriate extinguishing agents, live fire drills, fire prevention strategies, and post-fire investigation basics. Our expert trainers deliver actionable knowledge through hands-on scenarios with actual fire extinguishers and controlled fire simulations.",
    modules: ["Fire Chemistry & Behavior", "Fire Classification (A, B, C, D, K)", "Fire Extinguisher Types & PASS Technique", "Fire Hose Operation & Handling", "Fixed Fire Suppression Systems", "Fire Prevention & Housekeeping", "Hot Work Safety Procedures", "Live Fire Drill Exercises"],
    learningOutcomes: ["Classify fires and select the correct extinguishing agent", "Operate fire extinguishers using the PASS technique", "Handle fire hoses and fixed suppression systems", "Implement fire prevention measures in the workplace", "Respond effectively in the first 3 critical minutes of a fire"],
    targetAudience: ["All Employees", "Safety Officers", "ERT Members", "Facility Managers", "Contractors"],
    duration: "8–16 Hours",
    certification: "V-Safe Fire Safety Certificate",
    methodology: ["Classroom Theory", "Live Fire Demonstrations", "Hands-on Extinguisher Practice", "Fire Hose Drills", "Scenario-based Simulations", "Written & Practical Assessments"],
    whyImportant: "Industrial fires cause an estimated ₹1,000+ crore in losses annually in India. The Factories Act and NBC mandate regular fire safety training for all employees. Quick and correct response in the first 3 minutes of a fire can prevent 80% of fire-related damage. This training ensures your workforce can contain small fires, evacuate safely, and potentially save lives before fire services arrive."
  },
  "evacuation-drills": {
    fullDescription: "The Evacuation Drills program trains your organization to plan, execute, and evaluate effective emergency evacuations. Covering evacuation route planning, assembly point management, floor warden training, special needs evacuation, headcount procedures, and communication protocols, this program ensures your workforce can evacuate safely and efficiently in any emergency — fire, chemical spill, earthquake, or security threat.",
    modules: ["Evacuation Planning & Route Design", "Floor Warden Roles & Responsibilities", "Assembly Point Management", "Special Needs & Mobility-impaired Evacuation", "Communication & Alarm Systems", "Headcount & Accountability Procedures", "Post-drill Analysis & Improvement", "Regulatory Compliance Requirements"],
    learningOutcomes: ["Plan and execute a facility-wide evacuation within target time", "Train and deploy effective floor wardens", "Manage assembly points and conduct accurate headcounts", "Evacuate persons with disabilities safely", "Analyze drill performance and implement improvements"],
    targetAudience: ["Floor Wardens", "Safety Officers", "Facility Managers", "All Employees", "Security Personnel"],
    duration: "4–8 Hours (Theory + Live Drill)",
    certification: "V-Safe Evacuation Competency Certificate",
    methodology: ["Evacuation Planning Workshop", "Floor Warden Training", "Tabletop Exercises", "Full-scale Live Evacuation Drill", "Stopwatch-timed Performance", "Debriefing & Gap Analysis"],
    whyImportant: "A well-rehearsed evacuation can mean the difference between life and death. Regulatory bodies including NDMA and State Fire Services mandate regular evacuation drills. Organizations that conduct quarterly drills reduce evacuation time by up to 50% compared to those that drill annually. This training builds muscle memory so that when a real emergency strikes, response is automatic and orderly."
  },
  "fire-mock-drill": {
    fullDescription: "The Fire Mock Drill program designs and executes realistic fire emergency simulations for your facility. Going beyond basic evacuation, this program tests your complete emergency response — fire detection, alarm activation, extinguisher deployment, fire team response, evacuation procedures, medical response, and coordination with external fire services. Detailed performance analysis and gap identification ensure continuous improvement in your fire readiness.",
    modules: ["Mock Drill Planning & Scenario Design", "Fire Detection & Alarm Testing", "First Responder Deployment", "Fire Containment & Suppression", "Evacuation Under Simulated Smoke", "Casualty Management & Triage", "External Agency Coordination", "Performance Metrics & Gap Analysis"],
    learningOutcomes: ["Execute a comprehensive fire emergency response", "Test and validate fire detection and alarm systems", "Coordinate internal teams with external fire services", "Perform triage and casualty management", "Identify gaps and develop corrective action plans"],
    targetAudience: ["ERT Members", "Safety Officers", "Fire Wardens", "Facility Managers", "All Employees"],
    duration: "4–8 Hours (Planning + Drill + Debrief)",
    certification: "V-Safe Mock Drill Completion Report",
    methodology: ["Scenario Planning Sessions", "Full-scale Simulation", "Smoke Machine Deployment", "Timed Response Metrics", "Video Documentation", "Post-drill Review & Report"],
    whyImportant: "Mock drills are legally mandated under the Factories Act, OISD standards, and NBC guidelines. They reveal critical gaps between theory and practice — studies show 40% of emergency plans fail on first live test. Regular mock drills build confidence, identify equipment failures, and ensure your emergency response teams function as a coordinated unit during actual emergencies."
  },
  "emergency-response-team": {
    fullDescription: "The Emergency Response Team (ERT) training program transforms selected employees into a capable, confident, and well-coordinated emergency response force. Covering team formation, role assignment, incident command system (ICS), first aid, fire fighting, hazmat response basics, search and rescue, and communication protocols, this intensive program ensures your ERT can handle any workplace emergency until professional help arrives.",
    modules: ["ERT Formation & Role Assignment", "Incident Command System (ICS)", "Fire Response & Suppression", "Medical First Response", "Hazmat Awareness & Basic Response", "Search & Rescue Techniques", "Communication & Coordination Protocols", "ERT Equipment & Maintenance"],
    learningOutcomes: ["Function effectively within an Incident Command System", "Respond to fire, medical, and chemical emergencies", "Perform basic search and rescue operations", "Coordinate team communications during emergencies", "Maintain and inspect emergency response equipment"],
    targetAudience: ["Selected ERT Members", "Safety Officers", "Shift Supervisors", "Facility Managers", "Security Personnel"],
    duration: "16–24 Hours (Multi-day)",
    certification: "V-Safe ERT Competency Certificate",
    methodology: ["Classroom Training", "Hands-on Equipment Training", "Scenario-based Drills", "Team Coordination Exercises", "Practical Assessments", "Annual Refresher Plans"],
    whyImportant: "Professional emergency services typically take 15-30 minutes to reach industrial facilities. The actions taken by your internal ERT during this critical window determine the outcome of any emergency. A trained ERT can contain incidents before they escalate, perform life-saving interventions, and guide evacuations — potentially preventing fatalities, massive property loss, and production shutdowns."
  },
  "fire-marshal-training": {
    fullDescription: "The Fire Marshal Training program develops designated employees into certified fire safety leaders who can prevent, detect, and manage fire risks within their zones. Covering fire risk assessment, fire prevention auditing, emergency planning, fire warden duties, regulatory compliance, and fire investigation basics, this program creates an internal fire safety governance structure that operates 24/7 across all shifts.",
    modules: ["Fire Risk Assessment & Audit", "Fire Prevention & Housekeeping Standards", "Fire Detection & Alarm Systems", "Emergency Planning & Evacuation Management", "Zone Warden Duties & Responsibilities", "Hot Work Permit Systems", "Fire Investigation Basics", "Regulatory Compliance (NBC, OISD, Factories Act)"],
    learningOutcomes: ["Conduct comprehensive fire risk assessments", "Develop and maintain fire prevention programs", "Manage zone-level fire evacuations effectively", "Oversee hot work permits and fire safety compliance", "Assist in fire incident investigations"],
    targetAudience: ["Designated Fire Marshals", "Safety Officers", "Shift Supervisors", "Facility Managers", "Compliance Officers"],
    duration: "8–16 Hours",
    certification: "V-Safe Certified Fire Marshal",
    methodology: ["Classroom Theory", "Fire Risk Walk-through", "Practical Equipment Demos", "Emergency Planning Workshop", "Mock Investigation Exercise", "Written & Practical Assessment"],
    whyImportant: "Fire marshals form the backbone of an organization's fire safety infrastructure. NBC and insurance requirements mandate trained fire marshals across all large facilities. Effective fire marshals reduce fire incidents by up to 70% through proactive prevention and ensure rapid, organized response when incidents occur. This investment protects lives, assets, and business continuity."
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
console.log(`Batch 1 done: Updated ${updated} trainings (Health & Wellness + Fire Safety)`);
