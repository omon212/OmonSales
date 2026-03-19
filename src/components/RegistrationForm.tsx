import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export function RegistrationForm() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [transportType, setTransportType] = useState("");
  const [otherTransport, setOtherTransport] = useState("");

  const [spetsTexnikaType, setSpetsTexnikaType] = useState("");
  const [spetsTexnikaPurpose, setSpetsTexnikaPurpose] = useState("");

  const [userType, setUserType] = useState("");
  const [direction, setDirection] = useState(""); // NEW
  const [companyRole, setCompanyRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [cargoDetails, setCargoDetails] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith("+998 ")) val = "+998 ";
    setPhone(val);
  };

  const isSpetsTexnika = transportType === "Spets texnika";

  // Spets texnika: 2 step, Normal: 4 step
  const totalSteps = isSpetsTexnika ? 2 : 4;

  const handleNext = () => {
    if (step === 1) {
      if (!transportType) return;
      if (transportType === "Boshqa" && !otherTransport) return;
      setStep(2);
    } else if (step === 2) {
      if (isSpetsTexnika) {
        handleSubmit();
      } else {
        if (!userType) return;
        setStep(3);
      }
    } else if (step === 3) {
      if (!direction) return;
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (isSpetsTexnika) {
      if (
        !spetsTexnikaType ||
        !spetsTexnikaPurpose ||
        !name ||
        phone.length < 10
      )
        return;
      if (spetsTexnikaPurpose === "Sotib olmoqchiman") return;
    } else {
      if (userType === "Yuridik shaxs") {
        if (!companyRole || !companyName || !name || phone.length < 10) return;
      } else {
        if (!cargoDetails || !name || phone.length < 10) return;
      }
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-small font-bold transition-colors ${step >= i + 1 ? "bg-primary text-white" : "bg-secondary-bg text-secondary-text border border-border"}`}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`w-12 h-1 transition-colors ${step > i + 1 ? "bg-primary" : "bg-secondary-bg border-y border-border"}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const directions = [
    "Toshkent ichida",
    "Toshkentdan - viloyatga",
    "Viloyatdan - Toshkentga",
    "Viloyatdan - Viloyatga",
  ];

  if (isSuccess) {
    return (
      <section id="register-form" className="py-24 bg-secondary-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-main-bg rounded-2xl p-12 text-center border border-border shadow-lg"
          >
            <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-h2 text-primary-text mb-4">
              Muvaffaqiyatli yuborildi!
            </h2>
            <p className="text-body text-secondary-text mb-8">
              Arizangiz qabul qilindi. Tez orada mutaxassislarimiz siz bilan
              bog'lanishadi.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setTransportType("");
                setOtherTransport("");
                setSpetsTexnikaType("");
                setSpetsTexnikaPurpose("");
                setUserType("");
                setDirection("");
                setCompanyRole("");
                setCompanyName("");
                setCargoDetails("");
                setName("");
                setPhone("+998 ");
              }}
              className="bg-primary text-white px-8 py-3 rounded-xl text-button hover:bg-primary/90 transition-colors"
            >
              Yangi ariza yuborish
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register-form" className="py-24 bg-secondary-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-primary-text mb-4">
            Xizmatdan foydalanish
          </h2>
          <p className="text-body text-secondary-text">
            O'zingizga mos xizmatni tanlang va ma'lumotlarni kiriting.
          </p>
        </div>

        <div className="bg-main-bg rounded-2xl p-6 md:p-10 border border-border shadow-lg relative overflow-hidden">
          {renderStepIndicator()}

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-button text-primary-text mb-3">
                      Sizga qanday transport kerak?
                    </label>
                    <select
                      value={transportType}
                      onChange={(e) => setTransportType(e.target.value)}
                      className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                    >
                      <option value="" disabled>
                        Tanlang...
                      </option>
                      <option value="Tentli yuk mashinasi">
                        Tentli yuk mashinasi
                      </option>
                      <option value="Refrejerator">Refrejerator</option>
                      <option value="Fura">Fura</option>
                      <option value="Isuzu">Isuzu</option>
                      <option value="Gazel">Gazel</option>
                      <option value="Spets texnika">Spets texnika</option>
                      <option value="Boshqa">Boshqa</option>
                    </select>
                  </div>
                  {transportType === "Boshqa" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <label className="block text-button text-primary-text mb-3">
                        Sizga qanday transport-texnikamiz kerak?
                      </label>
                      <input
                        type="text"
                        value={otherTransport}
                        onChange={(e) => setOtherTransport(e.target.value)}
                        placeholder="Transport turini kiriting"
                        className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 2 - SPETS TEXNIKA */}
            {step === 2 && isSpetsTexnika && (
              <motion.div
                key="step2-spets"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-button text-primary-text mb-3">
                    Sizga qanday spets texnika kerak?
                  </label>
                  <input
                    type="text"
                    value={spetsTexnikaType}
                    onChange={(e) => setSpetsTexnikaType(e.target.value)}
                    placeholder="Masalan: Avtokran, Ekskavator..."
                    className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-button text-primary-text mb-3">
                    Spets texnika nima maqsadda kerak?
                  </label>
                  <div className="space-y-3">
                    {[
                      "Xizmatidan foydalanish",
                      "Ijaraga olmoqchiman",
                      "Sotib olmoqchiman",
                    ].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${spetsTexnikaPurpose === option ? "border-primary bg-primary/5" : "border-border hover:bg-secondary-bg"}`}
                      >
                        <input
                          type="radio"
                          name="purpose"
                          value={option}
                          checked={spetsTexnikaPurpose === option}
                          onChange={(e) =>
                            setSpetsTexnikaPurpose(e.target.value)
                          }
                          className="w-5 h-5 text-primary focus:ring-primary border-border"
                        />
                        <span className="ml-3 text-body text-primary-text">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {spetsTexnikaPurpose === "Sotib olmoqchiman" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-error/10 border border-error/20 flex items-start gap-3"
                  >
                    <AlertCircle
                      className="text-error shrink-0 mt-0.5"
                      size={20}
                    />
                    <p className="text-small text-error font-medium">
                      Biz sotish xizmati bilan shug'ullanmaymiz.
                    </p>
                  </motion.div>
                )}
                {spetsTexnikaPurpose &&
                  spetsTexnikaPurpose !== "Sotib olmoqchiman" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-6 overflow-hidden pt-4 border-t border-border"
                    >
                      <div>
                        <label className="block text-button text-primary-text mb-3">
                          Ismingizni yozing
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ismingiz"
                          className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-button text-primary-text mb-3">
                          Telefon raqamingizni kiriting
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                        />
                      </div>
                    </motion.div>
                  )}
              </motion.div>
            )}

            {/* STEP 2 - NORMAL TRANSPORT */}
            {step === 2 && !isSpetsTexnika && (
              <motion.div
                key="step2-normal"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <label className="block text-button text-primary-text mb-3">
                  O'zingizga mosini tanlang
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Yuridik shaxs", "Jismoniy shaxs"].map((type) => (
                    <label
                      key={type}
                      className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 cursor-pointer transition-all ${userType === type ? "border-primary bg-primary/5" : "border-border hover:bg-secondary-bg"}`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type}
                        checked={userType === type}
                        onChange={(e) => setUserType(e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-button text-primary-text">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 - YO'NALISH (faqat normal transport) */}
            {step === 3 && !isSpetsTexnika && (
              <motion.div
                key="step3-direction"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <label className="block text-button text-primary-text mb-3">
                  Yo'nalishni tanlang
                </label>
                <div className="space-y-3">
                  {directions.map((d, i) => (
                    <label
                      key={d}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${direction === d ? "border-primary bg-primary/5" : "border-border hover:bg-secondary-bg"}`}
                    >
                      <input
                        type="radio"
                        name="direction"
                        value={d}
                        checked={direction === d}
                        onChange={(e) => setDirection(e.target.value)}
                        className="sr-only"
                      />
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0
                        ${direction === d ? 'bg-primary text-white' : 'bg-secondary-bg text-secondary-text border border-border'}"
                      >
                        {i + 1}
                      </span>
                      <span className="text-body text-primary-text">{d}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4 - TAFSILOTLAR (eski step 3) */}
            {step === 4 && !isSpetsTexnika && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {userType === "Yuridik shaxs" ? (
                  <>
                    <div>
                      <label className="block text-button text-primary-text mb-3">
                        Korxonada kim bo'lib ishlaysiz?
                      </label>
                      <select
                        value={companyRole}
                        onChange={(e) => setCompanyRole(e.target.value)}
                        className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none"
                      >
                        <option value="" disabled>
                          Tanlang...
                        </option>
                        <option value="Direktor">Direktor</option>
                        <option value="Menejer">Menejer</option>
                        <option value="Logist">Logist</option>
                        <option value="Ta'minot bo'limi">
                          Ta'minot bo'limi
                        </option>
                        <option value="Boshqa">Boshqa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-button text-primary-text mb-3">
                        Korxonangiz nomini kiriting
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="MChJ / XK nomi"
                        className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-button text-primary-text mb-3">
                      Yukingiz miqdori va nima ekanligini kiriting
                    </label>
                    <textarea
                      value={cargoDetails}
                      onChange={(e) => setCargoDetails(e.target.value)}
                      placeholder="Masalan: 5 tonna qurilish mollari..."
                      rows={4}
                      className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    />
                  </div>
                )}
                <div className="pt-4 border-t border-border space-y-6">
                  <div>
                    <label className="block text-button text-primary-text mb-3">
                      Ismingiz
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ismingiz"
                      className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-button text-primary-text mb-3">
                      Telefon raqam
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full p-4 rounded-xl border border-border bg-main-bg text-primary-text focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-border">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-xl border border-border text-secondary-text hover:bg-secondary-bg hover:text-primary-text transition-colors flex items-center gap-2 font-medium"
              >
                <ChevronLeft size={20} /> Orqaga
              </button>
            ) : (
              <div />
            )}

            {/* Keyingisi tugmasi: step 1, 2 (normal), 3 (yo'nalish) */}
            {step === 1 ||
            (step === 2 && !isSpetsTexnika) ||
            (step === 3 && !isSpetsTexnika) ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 &&
                    (!transportType ||
                      (transportType === "Boshqa" && !otherTransport))) ||
                  (step === 2 && !isSpetsTexnika && !userType) ||
                  (step === 3 && !isSpetsTexnika && !direction)
                }
                className="bg-primary text-white px-8 py-3 rounded-xl text-button hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm"
              >
                Keyingisi <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  (isSpetsTexnika &&
                    (spetsTexnikaPurpose === "Sotib olmoqchiman" ||
                      !spetsTexnikaType ||
                      !spetsTexnikaPurpose ||
                      !name ||
                      phone.length < 10)) ||
                  (!isSpetsTexnika &&
                    userType === "Yuridik shaxs" &&
                    (!companyRole ||
                      !companyName ||
                      !name ||
                      phone.length < 10)) ||
                  (!isSpetsTexnika &&
                    userType === "Jismoniy shaxs" &&
                    (!cargoDetails || !name || phone.length < 10))
                }
                className="bg-primary text-white px-8 py-3 rounded-xl text-button hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Yuborilmoqda...
                  </span>
                ) : (
                  <>
                    <CheckCircle2 size={20} /> Yuborish
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
