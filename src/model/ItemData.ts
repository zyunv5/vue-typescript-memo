import Category from "./CateEnum";

class ItemData {
  id!: number;
  categoryId!: Category;
  title!: string;
  content!: string; //感叹号是非null和非undefined的类型断言
  createTime!: string;

  constructor(
    id = -1,
    //使用枚举类型代表比较分类
    categoryId: Category = -1,
    title = "",
    content = ""
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.content = content;
    this.createTime = this.toSelfDateStr(Date.now());
  }

  toSelfDateStr(timeSpan: number): string {
    const date = new Date(timeSpan);
    const str =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    return str;
  }
}

export default ItemData;
