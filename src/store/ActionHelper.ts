import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
import Category from "@/model/CateEnum";

class ActionHelper {
  //1.负责处理数据
  dataHelper: DataHelper = new DataHelper("memoData", "id");
  //1.1 笔记数组
  memoList!: Array<ItemData>;
  //2. 负责业务处理
  constructor() {
    this.memoList = this.readData();
  }
  //读取本地数据
  readData(): Array<ItemData> {
    //1. 读取本地的Object数组-dataHelper
    const arrObj = this.dataHelper.readData();
    //2. 将Object数组转成ItemData数组
    const arrItem = arrObj.map((ele: any) => {
      const item: ItemData = new ItemData();
      item.id = ele.id;
      item.categoryId = ele.categoryId;
      item.title = ele.title;
      item.content = ele.content;
      item.createTime = ele.createTime;
      return item;
    });
    //3.返回item数组
    return arrItem;
  }

  getCategoryName(categId: Category): string {
    const arrNames = ["工作", "生活", "学习"];
    return arrNames[categId];
  }
  //新增笔记
  add(item: ItemData): number {
    //1.保存到本地，返回生成的id值
    item.id = this.dataHelper.addData(item);
    //2.将笔记保存到笔记数组中
    this.memoList.push(item);
    //3.将笔记数组重新保存到本地
    this.dataHelper.saveData(this.memoList);
    //4.返回新笔记的id值
    return item.id;
  }
  //修改笔记
  edit(item: ItemData): void {
    //找到需要修改的对象
    const editItem: ItemData | undefined = this.memoList.find(ele => {
      return ele.id == item.id;
    });
    //修改对象的值
    if (editItem) {
      editItem.categoryId = item.categoryId;
      editItem.title = item.title;
      editItem.content = item.content;
      //将更新后的数组,重新保存到本地localStorage
      this.dataHelper.saveData(this.memoList);
    }
  }
  //删除笔记
  remove(id: number): void {
    //根据id找出要删除的对象在数组中的下标
    const index: number = this.memoList.findIndex(ele => {
      return ele.id === id;
    });
    //根据下标调用数组splice方法来删除对象
    if (index > -1) {
      this.memoList.splice(index, 1);
      this.dataHelper.saveData(this.memoList);
    }
  }
}

export default ActionHelper;
