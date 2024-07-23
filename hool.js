let une = prompt(
    "ta unee bichnuu 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол"
  );

  if (5000 >= Number(une) >= 30000) {
    alert((Number(une) / 100) * 115 + "₮");
  } else {
    alert((Number(une) / 100) * 120 + "₮");
  }