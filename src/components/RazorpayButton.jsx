import { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const scriptId = "razorpay-embed-btn-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.defer = true;
      script.id = scriptId;
      script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
      document.body.appendChild(script);
    } else {
      const rzp = window["_rzp_"];
      if (rzp && rzp.init) {
        rzp.init();
      }
    }
  }, []);

  return (
    <div
      className="razorpay-embed-btn"
      data-url="https://pages.razorpay.com/pl_Pt8UrOdu7LfMRZ/view"
      data-text="Register"
      data-color="#528FF0"
      data-size="large"
    ></div>
  );
};

export default RazorpayButton;
