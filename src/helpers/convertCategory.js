const mergeExpensesWithSettings = (expenses, settings) => {
  if (Array.isArray(expenses)) {
    return expenses.map((expense) => {
      const categoryId = parseInt(expense.category, 10);
      const setting = settings.find((setting) => setting.id === categoryId);

      if (setting) {
        return {
          ...expense,
          nameCategory: setting.name,
          src: setting.src,
        };
      }

      return expense;
    });
  } else {
    return [];
  }
};

export default mergeExpensesWithSettings;
