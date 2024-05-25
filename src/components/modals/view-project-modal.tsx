import { Modal } from "@/components/modals/index";
import { useModalStore } from "@/hooks/use-modal-store";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { AnimatedButton } from "../animated-button";
export const ViewProjectModal = () => {
  const { onOpen, isOpen, type, data } = useModalStore();

  if (!data.project) return;

  const { name, deployedLink, description, githubLink, image } = data.project;

  return (
    <Modal open={isOpen && type === "viewProjectModal"} title={name}>
      <div className="relative mx-auto h-[200px] w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="p-5 text-sm text-muted-foreground">{description}</p>
      <div className="flex justify-between gap-5 p-5 pt-0">
        <AnimatedButton
          href={githubLink}
          startIcon={FaGithub}
          className="w-full"
          target="_blank"
        >
          Github
        </AnimatedButton>
        <AnimatedButton
          href={deployedLink}
          startIcon={TiWorld}
          className="w-full"
          color="purple"
          target="_blank"
        >
          Live
        </AnimatedButton>
      </div>
    </Modal>
  );
};
