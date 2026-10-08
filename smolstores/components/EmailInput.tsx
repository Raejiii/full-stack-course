'use client'
export default function EmailInput() {
  return (
    <div className="email-container">
      <h5>Get a sneak peak at new additions by signing up for our newsletter!</h5>
      <div className="sing-up">
        <input type="email" placeholder="Enter your email" />
        <button>Sign up</button>
      </div>
    </div>
  );
}