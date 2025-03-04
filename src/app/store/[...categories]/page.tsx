interface CategoryProps {
  params: { categories: string[] };
  searchParams?: { [key: string]: string };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  return <h1>Categoría Dinámica: {JSON.stringify(categories)}</h1>;
}
