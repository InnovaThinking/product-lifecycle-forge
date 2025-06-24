
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StatusBadge } from "@/components/ui/status-badge"

const activities = [
  {
    id: 1,
    type: "experiment",
    title: "Teste A/B: Otimização do Fluxo de Checkout",
    description: "Experimento finalizado com 95% de confiança",
    user: { name: "Sarah Chen", avatar: "/placeholder.svg", initials: "SC" },
    timestamp: "2 minutos atrás",
    status: "Concluído",
    module: "validation"
  },
  {
    id: 2,
    type: "feature",
    title: "Integração de Pagamento Mobile",
    description: "Funcionalidade movida para fase de testes",
    user: { name: "Mike Johnson", avatar: "/placeholder.svg", initials: "MJ" },
    timestamp: "1 hora atrás",
    status: "Testando",
    module: "development"
  },
  {
    id: 3,
    type: "release",
    title: "Release Versão 2.1.0",
    description: "Candidato a release pronto para deploy",
    user: { name: "Alex Rivera", avatar: "/placeholder.svg", initials: "AR" },
    timestamp: "3 horas atrás",
    status: "Pronto",
    module: "launch"
  },
  {
    id: 4,
    type: "research",
    title: "Insights de Entrevistas com Usuários",
    description: "Novos insights adicionados à central de pesquisa",
    user: { name: "Emma Davis", avatar: "/placeholder.svg", initials: "ED" },
    timestamp: "5 horas atrás",
    status: "Publicado",
    module: "discovery"
  }
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>
          Últimas atualizações em todos os módulos do produto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} />
                <AvatarFallback className="text-xs">{activity.user.initials}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium truncate">{activity.title}</h4>
                  <StatusBadge 
                    status={activity.status} 
                    variant={activity.module as any}
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.user.name}</span>
                  <span>•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
