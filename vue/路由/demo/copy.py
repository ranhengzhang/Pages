# 这是一个示例 Python 脚本。

# 按 Shift+F10 执行或将其替换为您的代码。
# 按 双击 Shift 在所有地方搜索类、文件、工具窗口、操作和设置。

# 按间距中的绿色按钮以运行脚本。
import os
import shutil
import sys


def copy_dirs(from_file: str, to_file: str) -> None:
    if not to_file.find('node_modules') == -1:
        return
    if not to_file.find('.idea') == -1:
        return
    if not os.path.exists(to_file):  # 如不存在目标目录则创建
        os.makedirs(to_file)
    files = os.listdir(from_file)  # 获取文件夹中文件和目录列表
    for f in files:
        if os.path.isdir(from_file + '/' + f):  # 判断是否是文件夹
            copy_dirs(from_file + '/' + f, to_file + '/' + f)  # 递归调用本函数
        else:
            shutil.copy(from_file + '/' + f, to_file + '/' + f)  # 拷贝文件
            print(from_file + '/' + f, to_file + '/' + f)


if __name__ == '__main__':
    if len(sys.argv) == 3:
        if not sys.argv[1] == sys.argv[2]:
            source_path = os.path.abspath(sys.argv[1])
            target_path = os.path.abspath(sys.argv[2])
            # 检查源文件夹是否存在
            if not os.path.exists(source_path):
                # 源文件夹不存在
                print('invalid path')
            else:
                # 若目标文件夹不存在则创建
                if not os.path.exists(target_path):
                    os.mkdir(target_path)
                copy_dirs(source_path, target_path)
        else:
            # 相同路径
            print('same path')
    elif len(sys.argv) == 2:
        source_path = os.path.abspath('./.demo')
        target_path = os.path.abspath(sys.argv[1])
        # 若目标文件夹不存在则创建
        if not os.path.exists(target_path):
            os.mkdir(target_path)
        copy_dirs(source_path, target_path)
    else:
        print('invalid parameters')
    print('--END--')

# 访问 https://www.jetbrains.com/help/pycharm/ 获取 PyCharm 帮助
