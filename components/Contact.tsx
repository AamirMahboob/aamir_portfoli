// "use client";

// import FadeIn from "@/components/ui/FadeIn";
// import { SectionWithHeader } from "@/components/ui/Section";
// import { contactInfo } from "@/lib/data";
// import { Button, Form, Input, message } from "antd";
// import AIChat from "./AIChat";

// type ContactForm = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// export default function Contact() {
//   const [form] = Form.useForm<ContactForm>();

//   // const onFinish = async (values: ContactForm) => {
//   //   try {
//   //     const res = await fetch("http://localhost:5678/webhook-test/contact", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(values),
//   //     });
  
//   //     if (res.ok) {
//   //       message.success("Message sent successfully!");
//   //       form.resetFields();
//   //     } else {
//   //       message.error("Failed to send message.");
//   //     }
//   //   } catch (error) {
//   //     message.error("Something went wrong.");
//   //   }
//   // };

//   const onFinish = async (values: ContactForm) => {
//     try {
//       // Point this to your relative internal Next.js API route
//       // const res = await fetch("/api/contact", {
//       const res = await fetch("http://localhost:5678/webhook-test/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });
  
//       if (res.ok) {
//         message.success("Message sent successfully!");
//         form.resetFields();
//       } else {
//         message.error("Failed to send message.");
//       }
//     } catch (error) {
//       console.error(error);
//       message.error("Something went wrong.");
//     }
//   };
//   return (
//     <SectionWithHeader
//       id="contact"
//       label="Get in Touch"
//       title="Contact Me"
//       decorSide="section-right"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
//         <FadeIn>
//           <h3 className="font-syne font-black text-xl sm:text-2xl text-white mb-4">
//             Let&apos;s build something great together.
//           </h3>
//           <p className="text-sm leading-relaxed mb-8 text-muted">
//             I&apos;m always open to discussing new projects, creative ideas, or
//             opportunities to be part of your vision.
//           </p>
//           {contactInfo.map((item) => (
//             <div key={item.label} className="flex items-center gap-4 mb-5">
//               <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-cyan-400/10 border border-cyan-400/20">
//                 {item.icon}
//               </div>
//               <div>
//                 <div className="text-xs uppercase tracking-widest text-muted">
//                   {item.label}
//                 </div>
//                 <div className="text-sm font-medium text-slate-200 mt-0.5">
//                   {item.val}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </FadeIn>

//         <FadeIn delay={0.15}>
//           <Form
//             form={form}
//             layout="vertical"
//             onFinish={onFinish}
//             requiredMark={false}
//             className="flex flex-col gap-1"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <Form.Item
//                 name="name"
//                 rules={[{ required: true, message: "Please enter your name" }]}
//               >
//                 <Input size="large" placeholder="Your name" />
//               </Form.Item>
//               <Form.Item
//                 name="email"
//                 rules={[
//                   { required: true, message: "Please enter your email" },
//                   { type: "email", message: "Invalid email" },
//                 ]}
//               >
//                 <Input size="large" placeholder="Your email" type="email" />
//               </Form.Item>
//             </div>
//             <Form.Item
//               name="subject"
//               rules={[{ required: true, message: "Please enter a subject" }]}
//             >
//               <Input size="large" placeholder="Subject" />
//             </Form.Item>
//             <Form.Item
//               name="message"
//               rules={[{ required: true, message: "Please enter your message" }]}
//             >
//               <Input.TextArea rows={5} placeholder="Write your message..." />
//             </Form.Item>
//             <Form.Item className="!mb-0">
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 size="large"
//                 block
//                 className="!h-12 !font-bold"
//               >
//                 Send Message →
//               </Button>
//             </Form.Item>
//           </Form>
//         </FadeIn>
//       </div>
//       <AIChat />
//     </SectionWithHeader>
//   );
// }
// "use client";

// import FadeIn from "@/components/ui/FadeIn";
// import { SectionWithHeader } from "@/components/ui/Section";
// import { contactInfo } from "@/lib/data";
// import { Button, Form, Input, notification } from "antd"; // Changed to notification
// import AIChat from "./AIChat";
// import { useState } from "react";

// type ContactForm = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// export default function Contact() {
//   // 1. Initialize the notification API and its context holder
//   const [api, contextHolder] = notification.useNotification();
//   const [form] = Form.useForm<ContactForm>();
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values: ContactForm) => {
//     try {
//       setLoading(true); // Turn on button spinner

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       if (res.ok) {
//         // 2. Use the new notification style
//         api.success({
//           message: "Message Sent",
//           description: "Your message has been sent successfully.",
//           placement: "topRight",
//         });
//         form.resetFields();
//       } else {
//         api.error({
//           message: "Submission Failed",
//           description: "Failed to send message. Please try again.",
//           placement: "topRight",
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       api.error({
//         message: "Error",
//         description: "Something went wrong on our end.",
//         placement: "topRight",
//       });
//     } finally {
//       setLoading(false); // Turn off button spinner
//     }
//   };

//   return (
//     <>
//       {/* 3. CRITICAL: Inject the context holder here so notifications can render */}
//       {contextHolder}

//       <SectionWithHeader
//         id="contact"
//         label="Get in Touch"
//         title="Contact Me"
//         decorSide="section-right"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
//           <FadeIn>
//             <h3 className="font-syne font-black text-xl sm:text-2xl text-white mb-4">
//               Let&apos;s build something great together.
//             </h3>
//             <p className="text-sm leading-relaxed mb-8 text-muted">
//               I&apos;m always open to discussing new projects, creative ideas,
//               or opportunities to be part of your vision.
//             </p>
//             {contactInfo.map((item) => (
//               <div key={item.label} className="flex items-center gap-4 mb-5">
//                 <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-cyan-400/10 border border-cyan-400/20">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <div className="text-xs uppercase tracking-widest text-muted">
//                     {item.label}
//                   </div>
//                   <div className="text-sm font-medium text-slate-200 mt-0.5">
//                     {item.val}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </FadeIn>

//           <FadeIn delay={0.15}>
//             <Form
//               form={form}
//               layout="vertical"
//               onFinish={onFinish}
//               requiredMark={false}
//               className="flex flex-col gap-1"
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <Form.Item
//                   name="name"
//                   rules={[
//                     { required: true, message: "Please enter your name" },
//                   ]}
//                 >
//                   <Input size="large" placeholder="Your name" />
//                 </Form.Item>
//                 <Form.Item
//                   name="email"
//                   rules={[
//                     { required: true, message: "Please enter your email" },
//                     { type: "email", message: "Invalid email" },
//                   ]}
//                 >
//                   <Input size="large" placeholder="Your email" type="email" />
//                 </Form.Item>
//               </div>
//               <Form.Item
//                 name="subject"
//                 rules={[{ required: true, message: "Please enter a subject" }]}
//               >
//                 <Input size="large" placeholder="Subject" />
//               </Form.Item>
//               <Form.Item
//                 name="message"
//                 rules={[
//                   { required: true, message: "Please enter your message" },
//                 ]}
//               >
//                 <Input.TextArea rows={5} placeholder="Write your message..." />
//               </Form.Item>
//               <Form.Item className="!mb-0">
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   size="large"
//                   block
//                   loading={loading} // Dynamically bound to state
//                   className="!h-12 !font-bold"
//                 >
//                   Send Message →
//                 </Button>
//               </Form.Item>
//             </Form>
//           </FadeIn>
//         </div>
//         <AIChat />
//       </SectionWithHeader>
//     </>
//   );
// }


"use client";

import FadeIn from "@/components/ui/FadeIn";
import { SectionWithHeader } from "@/components/ui/Section";
import { contactInfo } from "@/lib/data";
import { Button, Form, Input, notification } from "antd";
import AIChat from "./AIChat";
import { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form] = Form.useForm<ContactForm>();
  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values: ContactForm) => {
    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        api.success({
          message: "Message Sent",
          description: "Your message has been sent successfully.",
          placement: "topRight",
        });

        form.resetFields();
      } else {
        api.error({
          message: "Failed",
          description: data.message || "Failed to send message.",
          placement: "topRight",
        });
      }
    } catch (error) {
      console.error(error);

      api.error({
        message: "Error",
        description: "Something went wrong.",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}

      <SectionWithHeader
        id="contact"
        label="Get in Touch"
        title="Contact Me"
        decorSide="section-right"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <FadeIn>
            <h3 className="font-syne font-black text-xl sm:text-2xl text-white mb-4">
              Let&apos;s build something great together.
            </h3>

            <p className="text-sm leading-relaxed mb-8 text-muted">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-cyan-400/10 border border-cyan-400/20">
                  {item.icon}
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted">
                    {item.label}
                  </div>

                  <div className="text-sm font-medium text-slate-200 mt-0.5">
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.15}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              className="flex flex-col gap-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Your name" />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email",
                    },
                    {
                      type: "email",
                      message: "Invalid email",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Your email"
                    type="email"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please enter a subject",
                  },
                ]}
              >
                <Input size="large" placeholder="Subject" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message",
                  },
                ]}
              >
                <Input.TextArea
                  rows={5}
                  placeholder="Write your message..."
                />
              </Form.Item>

              <Form.Item className="!mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={loading}
                  className="!h-12 !font-bold"
                >
                  Send Message →
                </Button>
              </Form.Item>
            </Form>
          </FadeIn>
        </div>

        <AIChat />
      </SectionWithHeader>
    </>
  );
}