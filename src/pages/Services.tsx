import { motion } from "framer-motion";
import { Code, Palette, Lightbulb, Rocket } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const services = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description:
      "Building responsive, performant websites with modern technologies.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that delight users.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Brand Strategy",
    description:
      "Developing cohesive brand identities that tell compelling stories.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Digital Marketing",
    description:
      "Driving growth through data-driven digital marketing strategies.",
  },
];

const Services = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header />
        <section className="py-20 mt-36 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-normal text-gray-900 dark:text-white mb-6">
                Services
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Specialized services tailored to help your business grow and
                succeed in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-blue-500/10 transition-colors duration-300"
                >
                  <div className="mb-6 p-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 w-fit text-purple-600 dark:text-purple-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />{" "}
      </Layout>
    </>
  );
};

export default Services;
