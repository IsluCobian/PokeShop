import { prevPage, setPage, nextPage } from "@/store/paginationSlice";
import { RootState } from "@/store/store";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
} from "./ui/pagination";

export default function PaginationControls({
  totalItems,
}: {
  totalItems: number;
}) {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);
  const totalPages = useMemo(() => Math.ceil(totalItems / 20), [totalItems]);

  const shouldShowPrev = page > 1;
  const shouldShowNext = page < totalPages;
  const shouldShowLeftEllipsis = page > 2;
  const shouldShowRightEllipsis = page < totalPages - 1;

  const pagesToShow = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1).filter(
      (num) => num >= page - 1 && num <= page + 1
    );
  }, [page, totalPages]);
  return (
    <Pagination>
      <PaginationContent>
        {shouldShowPrev && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
              onClick={() => dispatch(prevPage())}
            />
          </PaginationItem>
        )}

        {shouldShowLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {pagesToShow.map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              isActive={page === num}
              onClick={() => dispatch(setPage(num))}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        {shouldShowRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {shouldShowNext && (
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
              onClick={() => dispatch(nextPage())}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
