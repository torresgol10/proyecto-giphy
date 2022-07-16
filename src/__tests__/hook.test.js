import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "components/SearchForm/hook";

const setup = (params) => {
  return renderHook(() => useForm(params));
};

test("should change keyword", () => {
  const { result } = setup({ initialKeyword: "", initialRating: "g" });
  act(() => {
    result.current.updateKeyword("batman");
  });

  expect(result.current.keyword).toBe("batman");
});

test("should initial values", () => {
  const { result } = setup({ initialKeyword: "batman", initialRating: "g" });

  expect(result.current.keyword).toBe("batman");
});

test("should update Keyword multiple", () => {
  const { result } = setup({ initialKeyword: "", initialRating: "g" });

  act(() => {
    result.current.updateKeyword("b");
    result.current.updateKeyword("ba");
  });

  expect(result.current.keyword).toBe("ba");
  expect(result.current.times).toBe(2);
});
