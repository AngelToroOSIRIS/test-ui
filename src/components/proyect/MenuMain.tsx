"use client";

import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { useRouter } from "next/navigation";

interface itemsType {
  name: string;
  icon: string;
  rotate: boolean;
  target?: boolean;
  bounce: boolean;
  animate: any[];
  className: string;
  download?: string;
  href?: string;
  width: number;
  repeat?: number;
  title: string;
}

interface Props {
  action: boolean;
  callbackClick: (action: boolean) => void;
}

const MenuMain = ({ callbackClick, action }: Props) => {
  const router = useRouter();

  const items: itemsType[] = [
    {
      name: "Componentes",
      icon: "download",
      rotate: false,
      repeat: 4,
      href: "/components.zip",
      bounce: true,
      animate: [0, 5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 0, 0],
      className:
        "rounded-full bg-green overflow-hidden cursor-pointer text-default-white w-12 h-12 p-2",
      download: "components",
      width: 170,
      // TODO: Actualizar fechas
      title: "Descargar componentes 13/11/2024",
    },
    {
      name: "GitHub",
      icon: "github",
      rotate: true,
      bounce: false,
      repeat: 0,
      target: true,
      width: 125,
      animate: [0, 360],
      className:
        "rounded-full bg-custom-black dark:bg-background overflow-hidden cursor-pointer text-default-white w-12 h-12 p-2",
      title: "Repositorio",
    },
    {
      name: !action ? "Buscar" : "Cerrar",
      icon: "search",
      rotate: true,
      bounce: false,
      repeat: 0,
      target: true,
      width: 125,
      animate: [0, 360],
      className:
        "rounded-full bg-default-500 overflow-hidden cursor-pointer text-default-white w-12 h-12 p-2",
      title: "Buscar componentes",
    },
  ];

  return (
    <motion.div className="fixed flex bottom-6 left-6 gap-3 z-30 flex-col-reverse">
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          whileTap={{ scale: 0.9 }}
          className={item.className}
          transition={{ duration: 0.3 }}
          onClick={() => {
            if (item.name == "GitHub") {
              router.push("https://github.com/AngelToroOSIRIS/test-ui.git");
            } else if (item.name == "Buscar" || item.name == "Cerrar") {
              callbackClick(!action);
            }
          }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0, rotate: -360 }}
          whileHover={{ scale: 1.1, width: item.width, opacity: 1 }}
        >
          <motion.div
            initial="hidden"
            className="flex gap-4 items-center font-medium px-1"
          >
            <motion.div
              animate={
                item.bounce ? { y: item.animate } : { rotate: item.animate }
              }
              transition={{ repeat: item.repeat, duration: 2 }}
            >
              <Icon icon={item.icon} className="text-2xl text-default-white " />
            </motion.div>
            <p>{item.name}</p>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MenuMain;