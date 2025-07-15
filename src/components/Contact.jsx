import React, { useState } from 'react';
const Contact = () => {
  return (
    <section id="contact" className="px-8 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">📬 Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
        <form
          action="https://formsubmit.co/ajax/b258571ab990152a8d0d4a9d267725a2"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center mt-8 gap-6 text-xl text-gray-700">
          <a href="https://www.linkedin.com/in/kishore-reddy-mamidi-0a0b8519a" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-teal-600"></i>
          </a>
          <a href="https://github.com/kishore7860" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-teal-600"></i>
          </a>
          <a href="mailto:mamidikishorereddy@gmail.com">
            <i className="fas fa-envelope hover:text-teal-600"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSent, setIsSent] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const response = await fetch('https://formsubmit.co/ajax/b258571ab990152a8d0d4a9d267725a2', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setIsSent(true);
//       setFormData({ name: '', email: '', message: '' });

//       setTimeout(() => setIsSent(false), 4000);
//     }

//     setLoading(false);
//   };

//   return (
//     <section id="contact" className="bg-gray-50 py-16 px-6">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-teal-600 mb-6">Contact Me</h2>
//         <p className="text-gray-700 mb-8">
//           Feel free to reach out! I’m always open to opportunities, collaborations, or just a chat.
//         </p>

//         {isSent && (
//           <div className="mb-4 px-4 py-2 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//             ✅ Message sent successfully!
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6 text-left">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
//           >
//             {loading ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
