
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { Book, Plus, TestTube, BarChart3, TrendingUp, Clock } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ValidationPage = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-validation-700">Central de Validação</h1>
          <p className="text-muted-foreground mt-2">
            Teste de hipóteses e gestão de experimentos
          </p>
        </div>
        <Button className="bg-validation-600 hover:bg-validation-700">
          <Plus className="h-4 w-4 mr-2" />
          Nova Hipótese
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Hipóteses Ativas"
          value="12"
          change={{ value: "+3 esta semana", trend: "up" }}
          icon={<Book className="h-4 w-4" />}
        />
        <StatsCard
          title="Experimentos em Andamento"
          value="5"
          change={{ value: "2 finalizando em breve", trend: "neutral" }}
          icon={<TestTube className="h-4 w-4" />}
        />
        <StatsCard
          title="Taxa de Validação"
          value="67%"
          change={{ value: "+12% vs mês passado", trend: "up" }}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <StatsCard
          title="Duração Média dos Testes"
          value="14d"
          change={{ value: "-2 dias de melhoria", trend: "up" }}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Hypothesis Management */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/hypotheses')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <Book className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Gestão de Hipóteses</CardTitle>
                <CardDescription>Acompanhe e gerencie hipóteses</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-600">8</div>
                  <div className="text-xs text-muted-foreground">Rascunho</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-orange-600">5</div>
                  <div className="text-xs text-muted-foreground">Testando</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-green-600">12</div>
                  <div className="text-xs text-muted-foreground">Validado</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Hipóteses Recentes</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-xs">Otimização do checkout mobile</span>
                    <Badge variant="outline" className="text-xs">Testando</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="text-xs">Recomendações personalizadas</span>
                    <Badge variant="secondary" className="text-xs">Rascunho</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experiment Design */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/experiments')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <TestTube className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Experimentos Ativos</CardTitle>
                <CardDescription>Monitore testes em andamento</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { 
                  name: "Teste A/B do Fluxo de Checkout", 
                  type: "Teste A/B", 
                  progress: 78, 
                  confidence: 85,
                  daysLeft: 3
                },
                { 
                  name: "Pesquisa de Onboarding", 
                  type: "Pesquisa", 
                  progress: 45, 
                  confidence: null,
                  daysLeft: 8
                },
                { 
                  name: "Protótipo de Navegação", 
                  type: "Protótipo", 
                  progress: 92, 
                  confidence: 92,
                  daysLeft: 1
                }
              ].map((experiment, index) => (
                <div key={index} className="space-y-2 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{experiment.name}</span>
                    <Badge variant="outline" className="text-xs">{experiment.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progresso</span>
                      <span>{experiment.progress}% • {experiment.daysLeft}d restantes</span>
                    </div>
                    <Progress value={experiment.progress} className="h-1" />
                    {experiment.confidence && (
                      <div className="text-xs text-muted-foreground">
                        {experiment.confidence}% de confiança
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Validation Dashboard */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/validation/dashboard')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <BarChart3 className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Painel de Validação</CardTitle>
                <CardDescription>Resultados e insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">67%</div>
                  <div className="text-xs text-muted-foreground">Taxa de Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">23</div>
                  <div className="text-xs text-muted-foreground">Total de Testes</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Resultados Recentes</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">95% confiança: Melhoria no checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs">Falhou: Teste de esquema de cores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Inconclusivo: Layout mobile</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                Ver Todos os Resultados
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Repository */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-validation-100">
                <TrendingUp className="h-5 w-5 text-validation-600" />
              </div>
              <div>
                <CardTitle>Repositório de Aprendizados</CardTitle>
                <CardDescription>Principais insights e lições aprendidas</CardDescription>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Ver Todos os Aprendizados
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Otimização do Checkout Mobile",
                insight: "Reduzir campos do formulário em 40% aumentou conversão em 23%",
                confidence: 95,
                impact: "Alto",
                category: "UX"
              },
              {
                title: "Motor de Personalização",
                insight: "Recomendações com IA melhoraram engajamento em 31%",
                confidence: 87,
                impact: "Alto",
                category: "IA/ML"
              },
              {
                title: "Estratégia de Preços",
                insight: "Modelo freemium aumentou conversão trial-pago em 18%",
                confidence: 92,
                impact: "Médio",
                category: "Negócios"
              }
            ].map((learning, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{learning.title}</h4>
                  <Badge 
                    variant={learning.impact === "Alto" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {learning.impact}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{learning.insight}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{learning.confidence}% confiança</span>
                  <Badge variant="outline" className="text-xs">{learning.category}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ValidationPage
