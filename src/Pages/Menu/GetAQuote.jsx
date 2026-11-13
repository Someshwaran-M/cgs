import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, Send, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";

const ZOHO_ACTION = "https://forms.zohopublic.in/codegenzsolutionsdomaingm1/form/CodeGenzSolutionsContactForm/formperma/L42a2DM6L0tY2omF3beC6IE0Urdxed9cVxo1Hlnyo2g/htmlRecords/submit";

const projectTypes = ["New Project", 
                      "Existing Project", 
                      "Website Redesign", 
                      "Application Development", 
                      "Digital Marketing", 
                      "UI / UX Designing", 
                      "Branding & Creative Design", 
                      "E-Commerce Solutions", 
                      "Maintenance and Support", 
                      "Others"];

const timelines = ["Less than 2 Weeks", 
                    "2 - 4 Weeks", 
                    "1 - 2 Months", 
                    "2 - 3 Months", 
                    "3 - 6 Months", 
                    "More than 6 Months", 
                    "Flexible"];
                    
const services = ["Website Development", 
                  "Web Application Development", 
                  "E-Commerce Development", 
                  "Mobile Application Development", 
                  "Custom Software Development", 
                  "UI/UX Design", 
                  "Graphic & Branding Design", 
                  "Shopify Development", 
                  "Digital Marketing & SEO", 
                  "AI & Automation Solutions", 
                  "Website Maintenance & Support"];

const budgets = ["Below ₹5,000", 
                  "₹5,000 – ₹10,000", 
                  "₹10,000 – ₹25,000", 
                  "₹25,000 – ₹50,000", 
                  "₹50,000 – ₹1,00,000", 
                  "₹1,00,000 – ₹2,50,000", 
                  "₹2,50,000 – ₹5,00,000", 
                  "Above ₹5,00,000", 
                  "Not Sure – Need Consultation"];

const countries = [ "Afghanistan", "Akrotiri", "Albania", "Algeria", "American Samoa",
                    "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda",
                    "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Australia",
                    "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Barbados", "Bassas Da India", "Belarus",
                    "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
                    "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei",
                    "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
                    "Caribbean Netherlands", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China",
                    "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Cook Islands",
                    "Coral Sea Islands", "Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic",
                    "Democratic Republic of the Congo", "Denmark", "Dhekelia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
                    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)",
                    "Faroe Islands", "Federated States of Micronesia", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands",
                    "Gabon", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada",
                    "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-bissau", "Guyana", "Haiti", "Heard Island and Mcdonald Islands",
                    "Holy See (Vatican City)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man",
                    "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jersey", "Jordan", "Juan De Nova Island", "Kazakhstan", "Kenya",
                    "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
                    "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
                    "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat",
                    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands Antilles", "Netherlands", "New Caledonia",
                    "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Mariana Islands", "Norway",
                    "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines",
                    "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of the Congo", "Reunion", "Romania", "Russia", "Rwanda",
                    "Saint Barthélemy", "Saint Helena", "Saint Kitts and Nevis","Saint Lucia", "Saint Martin","Saint Pierre and Miquelon", "Saint Vincent and the Grenadines","Samoa",
                    "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia",
                    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "South Sudan",
                    "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
                    "Tajikistan", "Tanzania", "Thailand", "The Bahamas", "The Gambia", "Timor-leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago",
                    "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
                    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
                    "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara",
                    "Yemen", "Zambia", "Zimbabwe", "Åland Islands"
];

const initialForm = {
      name: "", 
      email: "", 
      projectType: "", 
      company: "", 
      phone: "", 
      timeline: "",
      city: "", 
      region: "", 
      postalCode: "", 
      country: "", 
      services: [],
      otherService: "", 
      budget: "", 
      projectDetails: "",
};

const inputClass = "h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#07182d] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5";
const labelClass = "mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500";

export default function GetAQuote() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [error, setError] = useState("");
  const submissionStarted = useRef(false);
  const iframeRef = useRef(null);

  const redirectInputRef = useRef(null);
  const submitTimerRef = useRef(null);

  
  const zohoFieldToState = {
    SingleLine: "name",
    SingleLine1: "company",
    Email: "email",
    PhoneNumber_countrycode: "phone",
    Dropdown: "projectType",
    Dropdown1: "timeline",
    Address_City: "city",
    Address_Region: "region",
    Address_ZipCode: "postalCode",
    Address_Country: "country",
    Dropdown2: "budget",
    MultiLine: "projectDetails",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const stateKey = zohoFieldToState[name] || name;
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
  };

  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    if (!e.currentTarget.reportValidity()) {
      e.preventDefault();
      return;
    }

    if (!formData.services.length) {
      e.preventDefault();
      setError("Please select at least one service.");
      document.getElementById("services-section")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    if (formData.services.includes("Other") && !formData.otherService.trim()) {
      e.preventDefault();
      setError("Please specify the other service you need.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    setShowSuccess(false);
    submissionStarted.current = true;

    if (submitTimerRef.current) {
      window.clearTimeout(submitTimerRef.current);
    }

    submitTimerRef.current = window.setTimeout(() => {
      if (!submissionStarted.current) return;
      submissionStarted.current = false;
      setIsSubmitting(false);
      setError(
        "Zoho is taking longer than expected to respond. Please check your Zoho Forms dashboard before submitting again, to avoid creating a duplicate enquiry."
      );
    }, 30000);
  };

  const handleFrameLoad = () => {
    if (!submissionStarted.current || !iframeRef.current) return;

    let responseUrl = "";
    try {
      responseUrl = iframeRef.current.contentWindow.location.href;
    } catch {

      if (submitTimerRef.current) {
        window.clearTimeout(submitTimerRef.current);
        submitTimerRef.current = null;
      }
      submissionStarted.current = false;
      setIsSubmitting(false);
      setError("");
      setFormData(initialForm);
      setShowSuccess(true);
      return;
    }

    const response = new URL(responseUrl, window.location.origin);
    if (
      response.origin === window.location.origin &&
      response.searchParams.get("zoho_form_status") === "success"
    ) {
      if (submitTimerRef.current) {
        window.clearTimeout(submitTimerRef.current);
        submitTimerRef.current = null;
      }
      submissionStarted.current = false;
      setIsSubmitting(false);
      setError("");
      setFormData(initialForm);
      setShowSuccess(true);
    }
  };
  useEffect(() => {
    return () => {
      if (submitTimerRef.current) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const closeSuccess = () => {
    setShowSuccess(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] font-['Roboto'] text-[#07182d]">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#061525]">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
          <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-8 sm:px-8 sm:pb-20 md:px-12 lg:px-16">

          <Link to="/" className="group mb-12 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white">
            <ArrowLeft size={15} strokeWidth={1.7} className="transition-transform group-hover:-translate-x-1" /> Back Home
          </Link>

          <div className="max-w-[850px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#1683ff]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#1683ff]">Start A Project</span>
            </div>

            <h1 className="text-3xl font-light leading-tight tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              Let's build something <span className="block font-medium text-[#1683ff]">meaningful.</span>
            </h1>

            <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-400 sm:text-base">
              Tell us about your project, your goals, and what you have in mind. We'll use the details to understand your requirements and prepare the right solution for your project.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1250px]">

          <form action={ZOHO_ACTION} method="POST" name="form" id="codegenz-quote-form"
            target="zoho-quote-response" acceptCharset="UTF-8" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input type="hidden" name="zf_referrer_name" value="" />
            <input ref={redirectInputRef} type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <aside className="lg:sticky lg:top-10 lg:self-start">

                <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(7,24,45,0.05)] sm:p-9">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061525] text-[#1683ff]"><Sparkles size={21} strokeWidth={1.5} /></div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">Project Brief</p>
                  <h2 className="text-xl font-medium tracking-[-0.01em] text-[#07182d]">Help us understand your idea.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-500">The more information you provide, the better we can understand your project scope and recommend an appropriate approach.</p>
                  <div className="mt-10 space-y-6">
                    {["Tell us about your project", "Share your contact and location", "Select your requirements", "Share your budget and timeline", "Submit your project brief"].map((item, index) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1683ff]/30 bg-[#1683ff]/5 text-[11px] font-bold text-[#1683ff]">{index + 1}</div>
                        <p className="pt-1 text-sm font-medium leading-5 text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(7,24,45,0.05)] sm:p-9 md:p-10">
                <section>

                  <div className="mb-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">01 — Project Basics</p>
                    <h2 className="mt-2 text-lg font-medium text-[#07182d]">Tell us about the project</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div><label htmlFor="quote-name" className={labelClass}>Your Name *</label>
                      <input id="quote-name" className={inputClass} name="SingleLine" type="text" maxLength="255" autoComplete="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required /></div>
                   
                    <div><label htmlFor="quote-company" className={labelClass}>Company / Brand Name</label>
                      <input id="quote-company" className={inputClass} name="SingleLine1" type="text" maxLength="255" autoComplete="organization" placeholder="Enter your company or brand name" value={formData.company} onChange={handleChange} /></div>
                   
                    <div><label htmlFor="quote-email" className={labelClass}>Email *</label>
                      <input id="quote-email" className={inputClass} name="Email" type="email" maxLength="255" autoComplete="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required /></div>
                   
                    <div><label htmlFor="quote-phone" className={labelClass}>Phone *</label>
                      <input id="quote-phone" className={inputClass} name="PhoneNumber_countrycode" type="tel" maxLength="20" autoComplete="tel" placeholder="Enter your phone number" pattern="[+0-9() .-]{7,20}" title="Enter a valid phone number." value={formData.phone} onChange={handleChange} required /></div>
                   
                    <div><label htmlFor="quote-project-type" className={labelClass}>Project Type *</label>
                      <div className="relative"><select id="quote-project-type" className={`${inputClass} appearance-none pr-11`} name="Dropdown" value={formData.projectType} onChange={handleChange} required>
                   
                        <option value="">Select Project type</option>{projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                      </select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div></div>
                   
                    <div><label htmlFor="quote-timeline" className={labelClass}>Expected Timeline *</label>
                      <div className="relative"><select id="quote-timeline" className={`${inputClass} appearance-none pr-11`} name="Dropdown1" value={formData.timeline} onChange={handleChange} required>
                   
                        <option value="">Select Timeline</option>{timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                      </select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div></div>
                  </div>
                </section>

                <section className="mt-12 border-t border-slate-100 pt-10">
                  
                  <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">02 — Location</p>
                    <h2 className="mt-2 text-lg font-medium text-[#07182d]">Where are you located?</h2></div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  
                    <div><label htmlFor="quote-city" className={labelClass}>City *</label>
                      <input id="quote-city" className={inputClass} name="Address_City" type="text" maxLength="255" autoComplete="address-level2" placeholder="Enter your city" value={formData.city} onChange={handleChange} required /></div>
                  
                    <div><label htmlFor="quote-region" className={labelClass}>State / Region / Province *</label>
                      <input id="quote-region" className={inputClass} name="Address_Region" type="text" maxLength="255" autoComplete="address-level1" placeholder="Enter your state or region" value={formData.region} onChange={handleChange} required /></div>
                  
                    <div><label htmlFor="quote-postal" className={labelClass}>Postal / Zip Code</label>
                      <input id="quote-postal" className={inputClass} name="Address_ZipCode" type="text" maxLength="255" autoComplete="postal-code" placeholder="Enter postal code" value={formData.postalCode} onChange={handleChange} /></div>
                  
                    <div><label htmlFor="quote-country" className={labelClass}>Country *</label>
                      <div className="relative"><select id="quote-country" className={`${inputClass} appearance-none pr-11`} name="Address_Country" autoComplete="country-name" value={formData.country} onChange={handleChange} required>
                  
                        <option value="">Select Country</option>{countries.map((country) => <option key={country} value={country}>{country}</option>)}
                      </select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div></div>
                  </div>
                </section>

                <section id="services-section" className="mt-12 border-t border-slate-100 pt-10">
                  <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">03 — Services</p>
                    <h2 className="mt-2 text-lg font-medium text-[#07182d]">What do you need? *</h2>
                    <p className="mt-2 text-sm text-slate-500">Select one or more services.</p></div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {services.map((service) => {
                      const selected = formData.services.includes(service);
                      return <label key={service} className={`flex min-h-[58px] cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${selected ? "border-[#1683ff] bg-[#1683ff]/5 text-[#07182d]" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-[#1683ff]/40 hover:bg-white"}`}>
                        <span className="font-medium">{service}</span>
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#1683ff] bg-[#1683ff] text-white" : "border-slate-300 text-transparent"}`}><Check size={12} strokeWidth={2.5} /></span>
                        <input className="sr-only" type="checkbox" name="Checkbox" value={service} checked={selected} onChange={() => toggleService(service)} />
                      </label>;
                    })}
                    <label className={`flex min-h-[58px] cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${formData.services.includes("Other") ? "border-[#1683ff] bg-[#1683ff]/5" : "border-slate-200 bg-slate-50"}`}>
                      <span className="font-medium">Other</span>
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${formData.services.includes("Other") ? "border-[#1683ff] bg-[#1683ff] text-white" : "border-slate-300 text-transparent"}`}><Check size={12} /></span>
                      <input className="sr-only" type="checkbox" name="Checkbox" value="zfs-others-zfs" checked={formData.services.includes("Other")} onChange={() => toggleService("Other")} />
                    </label>
                  </div>
                  {formData.services.includes("Other") && <div className="mt-5">
                    <label htmlFor="quote-other" className={labelClass}>Please specify other service *</label>
                    <input id="quote-other" className={inputClass} name="Checkbox_allow_others_text" type="text" maxLength="150" placeholder="Enter the service you need" value={formData.otherService} onChange={(e) => setFormData((prev) => ({ ...prev, otherService: e.target.value }))} required />
                  </div>}
                </section>

                <section className="mt-12 border-t border-slate-100 pt-10">
                  <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">04 — Budget</p>
                    <h2 className="mt-2 text-lg font-medium text-[#07182d]">What investment range are you considering? *</h2></div>
                  
                  <div className="relative"><select id="quote-budget" className={`${inputClass} appearance-none pr-11`} name="Dropdown2" value={formData.budget} onChange={handleChange} required>
                    <option value="">Select your Budget Range</option>{budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                  </select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" /></div>
                </section>

                <section className="mt-12 border-t border-slate-100 pt-10">
                  <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">05 — Project Details</p>
                    <h2 className="mt-2 text-lg font-medium text-[#07182d]">Tell us more about your idea *</h2></div>
                  <textarea id="quote-details" name="MultiLine" required maxLength="65535" rows={7} value={formData.projectDetails} onChange={handleChange}
                    placeholder="Describe your project, business goals, required features, design preferences, reference websites, existing applications, or any specific requirements you'd like us to know."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-[#07182d] outline-none transition-all placeholder:text-slate-400 focus:border-[#1683ff] focus:bg-white focus:ring-4 focus:ring-[#1683ff]/5" />
                </section>

                {error && <p role="alert" className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                <div className="mt-10 border-t border-slate-100 pt-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div className="max-w-[400px]">
                      <p className="text-xs leading-5 text-slate-400">By submitting this form, you are providing the project information needed for our team to understand your requirements.</p>
                      {isSubmitting && <p className="mt-2 text-xs font-medium text-[#1683ff]" role="status"> Processing your enquiry. Please wait while we submit your details securely.</p>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#061525] px-7 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#1683ff] hover:shadow-xl disabled:cursor-wait disabled:opacity-60">
                      {isSubmitting ? "Sending securely..." : "Submit Project"} <Send size={16} strokeWidth={1.7} className="transition-transform group-hover:translate-x-1" />
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </form>

          <iframe ref={iframeRef} title="Zoho form response" name="zoho-quote-response" src="about:blank" className="hidden" onLoad={handleFrameLoad} />
        </div>
      </section>

      {showSuccess && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061525]/70 px-4 py-8" role="dialog" aria-modal="true" aria-labelledby="quote-success-title">
        <div className="relative w-full max-w-md rounded-[28px] border border-slate-100 bg-white p-8 text-center shadow-2xl sm:p-10">
          
          <button type="button" onClick={closeSuccess} aria-label="Close success message" className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"><X size={18} /></button>
          
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1683ff]/10 text-[#1683ff]"><Check size={32} strokeWidth={1.8} /></div>
          
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#1683ff]">Project Brief Received</p>
          
          <h2 id="quote-success-title" className="mt-3 text-2xl font-medium text-[#07182d]">Thank you for your enquiry.</h2>
          
          <p className="mt-4 text-sm leading-7 text-slate-500">Thank you for reaching out to CodeGenz Solutions! Your enquiry has been received successfully. Our team will review your project requirements and contact you shortly to discuss the next steps.</p>
          
          <button type="button" onClick={closeSuccess} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#061525] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#1683ff]">Done <ArrowUpRight size={15} /></button>
        </div>
      </div>}
    </main>
  );
}
