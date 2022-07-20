import {
  CategoryTitle,
  CategoryList,
  CategoryListItem,
  CategoryListItemLink
} from "./styles";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryListItemLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryListItemLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </section>
  );
}
