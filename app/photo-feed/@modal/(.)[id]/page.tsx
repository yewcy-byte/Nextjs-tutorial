import Image from "next/image";
import images from "@/app/photo-feed/metadata";
import Modal from "@/components/modal";
import { notFound } from "next/navigation";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = images.find((p) => p.id === id);

  if (!photo) notFound();

  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h3>{photo.photographer}</h3>
        <p>{photo.location}</p>
      </div>
    </Modal>
  );
}