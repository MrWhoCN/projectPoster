import React, { useState } from 'react';
import { Github, Globe, Server, DollarSign, Terminal, Search, BookOpen } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/Card';

const projects = [
  {
    title: "Info Portal",
    url: "info.bytebridgesolution.com",
    description: "信息门户网站，提供各类资讯服务",
    category: "Web Portal",
    color: "bg-blue-500",
    icon: Globe
  },
  {
    title: "AI Platform",
    url: "ai.bytebridgesolution.com",
    description: "人工智能应用平台",
    category: "AI",
    color: "bg-purple-500",
    icon: Terminal
  },
  {
    title: "Finance System",
    url: "finance.kindbridge.co.za",
    description: "金融管理系统",
    category: "Finance",
    color: "bg-green-500",
    icon: DollarSign
  },
  {
    title: "API Gateway",
    url: "api.bytebridgesolution.com",
    description: "API网关服务",
    category: "Backend",
    color: "bg-red-500",
    icon: Server
  },
  {
    title: "Search Engine",
    url: "search.bytebridgesolution.com",
    description: "搜索引擎服务",
    category: "Search",
    color: "bg-yellow-500",
    icon: Search
  },
  {
    title: "Note System",
    url: "note.bytebridgesolution.com",
    description: "笔记系统",
    category: "Tools",
    color: "bg-pink-500",
    icon: BookOpen
  }
];

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            我的项目展示
          </h1>
          <p className="text-xl text-gray-300">全栈开发者 / 解决方案架构师</p>
        </div>

        {/* GitHub Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <a
              href="https://github.com/MrWhoCN"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
          >
            <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="w-6 h-6" />
                  GitHub Profile
                </CardTitle>
                <CardDescription className="text-gray-300">
                  查看我的开源项目和贡献
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
                <a
                    key={index}
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className={`h-full bg-gray-800 border-gray-600 hover:border-purple-500 shadow-lg transition-all duration-300 ${hoveredCard === index ? 'transform -translate-y-2 shadow-2xl' : ''}`}>

                  <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${project.color} mb-4 flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.url}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{project.description}</p>
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${project.color} bg-opacity-20`}>
                          {project.category}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
            );
          })}
        </div>
      </div>
  );
};

export default Projects;
