
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { Search, Plus, Users, MapPin, Target, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const DiscoveryPage = () => {
  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-discovery-700">Central de Descoberta</h1>
          <p className="text-muted-foreground mt-2">
            Pesquisa, insights e identificação de oportunidades
          </p>
        </div>
        <Button className="bg-discovery-600 hover:bg-discovery-700">
          <Plus className="h-4 w-4 mr-2" />
          Nova Pesquisa
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Insights de Pesquisa"
          value="47"
          change={{ value: "+12 esta semana", trend: "up" }}
          icon={<Search className="h-4 w-4" />}
        />
        <StatsCard
          title="Personas Ativas"
          value="8"
          change={{ value: "2 atualizadas", trend: "neutral" }}
          icon={<Users className="h-4 w-4" />}
        />
        <StatsCard
          title="Mapas de Jornada"
          value="5"
          change={{ value: "1 em progresso", trend: "up" }}
          icon={<MapPin className="h-4 w-4" />}
        />
        <StatsCard
          title="Oportunidades"
          value="23"
          change={{ value: "5 priorizadas", trend: "up" }}
          icon={<Target className="h-4 w-4" />}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Research Hub */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/research')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Search className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Central de Pesquisa</CardTitle>
                <CardDescription>Insights de pesquisa centralizados</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Entrevistas com Usuários</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Respostas de Pesquisa</span>
                  <span className="font-medium">847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Análises de Analytics</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Insights Recentes</div>
                <div className="space-y-1">
                  <div className="text-xs bg-muted p-2 rounded">
                    Análise de abandono do checkout mobile
                  </div>
                  <div className="text-xs bg-muted p-2 rounded">
                    Pontos de atrito no onboarding
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personas */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/personas')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Users className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Personas de Usuário</CardTitle>
                <CardDescription>Perfis de usuários-alvo</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Profissional Tech-Savvy", confidence: 95 },
                { name: "Usuário Mobile Casual", confidence: 87 },
                { name: "Tomador de Decisão Empresarial", confidence: 92 }
              ].map((persona, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{persona.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {persona.confidence}% confiança
                    </Badge>
                  </div>
                  <Progress value={persona.confidence} className="h-1" />
                </div>
              ))}
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                Ver Todas as Personas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Opportunity Canvas */}
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/opportunities')}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-discovery-100">
                <Target className="h-5 w-5 text-discovery-600" />
              </div>
              <div>
                <CardTitle className="text-lg">Canvas de Oportunidades</CardTitle>
                <CardDescription>Oportunidades de produto</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-green-600">8</div>
                  <div className="text-xs text-muted-foreground">Alto Impacto</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">12</div>
                  <div className="text-xs text-muted-foreground">Médio</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">3</div>
                  <div className="text-xs text-muted-foreground">Baixo Impacto</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Principais Prioridades</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Otimização do app mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Redesign do fluxo de pagamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Analytics avançado</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Journey Maps & Market Intelligence */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/journeys')}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-discovery-100">
                  <MapPin className="h-5 w-5 text-discovery-600" />
                </div>
                <div>
                  <CardTitle>Mapas de Jornada do Cliente</CardTitle>
                  <CardDescription>Pontos de contato da experiência do usuário</CardDescription>
                </div>
              </div>
              <Badge variant="outline">5 Ativas</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { journey: "Fluxo de Compra E-commerce", stage: "Otimização", pain: 3 },
                { journey: "Onboarding do App Mobile", stage: "Análise", pain: 5 },
                { journey: "Experiência de Suporte ao Cliente", stage: "Mapeamento", pain: 2 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{item.journey}</div>
                    <div className="text-xs text-muted-foreground">{item.stage}</div>
                  </div>
                  <Badge variant={item.pain > 3 ? "destructive" : "secondary"} className="text-xs">
                    {item.pain} pontos de dor
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover cursor-pointer" onClick={() => navigate('/discovery/market')}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-discovery-100">
                  <TrendingUp className="h-5 w-5 text-discovery-600" />
                </div>
                <div>
                  <CardTitle>Inteligência de Mercado</CardTitle>
                  <CardDescription>Análise competitiva e tendências</CardDescription>
                </div>
              </div>
              <Badge variant="outline">Atualizado há 2h</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold">12</div>
                  <div className="text-xs text-muted-foreground">Concorrentes Monitorados</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">R$ 2,4B</div>
                  <div className="text-xs text-muted-foreground">Tamanho do Mercado</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Atualizações Recentes</div>
                <div className="space-y-1">
                  <div className="text-xs bg-muted p-2 rounded">
                    Concorrente A lançou novas funcionalidades mobile
                  </div>
                  <div className="text-xs bg-muted p-2 rounded">
                    Tendência da indústria: Personalização com IA
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DiscoveryPage
