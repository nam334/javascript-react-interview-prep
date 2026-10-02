import styled from "styled-components";

export const SidebarDiv = styled.aside`
  width: 230px;
  min-width: 230px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  height: fit-content;
`;

export const SidebarTitle = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 0;
  border-top: 1px solid #e5e7eb;

  label {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    color: #4b5563;
    cursor: pointer;
  }

  input[type="checkbox"],
  input[type="radio"] {
    cursor: pointer;
  }

  input[type="range"] {
    width: 100%;
    cursor: pointer;
  }
`;

export const FilterTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 600;
  color: #374151;
`;

export const PriceLabels = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 12px;
  color: #6b7280;
`;
export const ClearFiltersButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 16px;

  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 8px;

  font-size: 13px;
  font-weight: 500;
  color: #4b5563;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

export const FilterChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  width: fit-content;
  padding: 6px 10px;

  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  font-size: 14px;
  color: #374151;

  svg {
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  svg:hover {
    transform: scale(1.15);
  }
`;
export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 15px;
`;

export const SortLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #6b7280;
  }
`;
