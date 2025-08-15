function searchBST(root, val) {
  if (!root) return null; // اگر رسیدیم به ته درخت و چیزی پیدا نکردیم
  if (root.val === val) return root; // اگر خود نود همون val بود، همون نود رو برگردون

  if (val < root.val) return searchBST(root.left, val); // جستجو در چپ
  else return searchBST(root.right, val); // جستجو در راست
}

// Iterative solution
function searchBST(root, val) {
  let node = root;

  while (node) {
    if (node.val === val) {
      return node; // نود پیدا شد
    } else if (val < node.val) {
      node = node.left; // برو سمت چپ
    } else {
      node = node.right; // برو سمت راست
    }
  }

  return null; // اگر پیدا نشد
}
