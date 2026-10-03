type SlideMarkupProps = {
  markup: string;
};

export default function SlideMarkup({ markup }: SlideMarkupProps) {
  return (
    <section
      className="slide-page bg-gray-900 text-gray-100 antialiased"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
