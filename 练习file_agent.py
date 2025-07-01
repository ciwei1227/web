import os

class FileAgent:
    def __init__(self):
        self.saved_files = []
    
    def save_file(self, filename, content):
        """保存文件到当前目录"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            self.saved_files.append(filename)
            return f"文件 {filename} 保存成功"
        except Exception as e:
            return f"保存文件时出错: {str(e)}"
    
    def list_saved_files(self):
        """列出已保存的文件"""
        return self.saved_files if self.saved_files else "尚未保存任何文件"


# 使用示例
if __name__ == "__main__":
    agent = FileAgent()
    
    # 保存一个示例文件
    print(agent.save_file("example.txt", "这是一个测试文件内容"))
    
    # 列出已保存的文件
    print("已保存的文件:", agent.list_saved_files())
    