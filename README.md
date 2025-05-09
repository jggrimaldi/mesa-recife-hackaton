# Projeto: Plataforma Integrada de Redução de Desperdício de Alimentos com IoT e Visão Computacional  
ㅤㅤ
ㅤㅤ

## Contexto: 

Contexto:
Recife enfrenta desafios significativos relacionados à fome, insegurança alimentar e desperdício de alimentos. Grandes quantidades de alimentos em bom estado são descartadas diariamente em feiras e mercados. Ao mesmo tempo, a população em vulnerabilidade social sofre com a falta de acesso a uma alimentação adequada. Essa proposta visa integrar tecnologias emergentes para otimizar a coleta, redistribuição e compostagem de alimentos por meio de uma plataforma digital e dispositivos IoT.  

ㅤㅤ
ㅤㅤ



## Resumo da Solução:

Cestas Inteligentes com Visão Computacional que detectam a quantidade de alimentos depositados.

Lixeiras Inteligentes para Orgânicos que notificam automaticamente quando estão cheias.

Plataforma Web com Mapa mostrando pontos de coleta, disponibilidade de alimentos, status das lixeiras e indicadores ambientais/sociais.

ㅤㅤ
ㅤㅤ

## Dados de Referência Importantes:

No Brasil, estima-se que 30% de toda produção de alimentos seja desperdiçada — cerca de 41 mil toneladas/dia (FAO).

O Recife desperdiça aproximadamente 1.048 kg de alimentos por dia em apenas quatro feiras (ABRELPE/2023).

Em quatro anos, o SAFUC já desviou 287 toneladas de resíduos orgânicos e produziu 147 toneladas de composto, reduzindo 2.130 toneladas de GEE.

ㅤㅤ
ㅤㅤ


## Fluxo da Solução:

1- Comerciantes e consumidores em feiras públicas depositam alimentos nas cestas inteligentes.

2- Os feirantes fazem a triagem manual dos alimentos, decidindo se estão aptos para consumo humano ou apenas para polpa ou compostagem.

3- A câmera embarcada nas cestas captura a imagem dos alimentos.

4- Um modelo de visão computacional (ex: MobileNet/YOLOv5) quantifica os alimentos depositados, sem realizar classificação de qualidade.

5- O dispositivo envia dados em tempo real para o backend via Wi-Fi ou protocolo MQTT.

6- A plataforma web registra o tipo de alimento (informado pelo feirante), localização, volume e hora da doação.

7- Cozinhas solidárias, restaurantes populares ou ONGs são notificadas automaticamente sobre a disponibilidade de alimentos próximos.

8- O alimento é coletado para preparo e distribuição à população vulnerável.

9- Alimentos descartados na lixeira passam por medição de volume e temperatura.

#### 10- Quando a lixeira atinge 80-90% de capacidade, o sistema envia um aviso por e-mail/push notificando a equipe de coleta/compostagem.
#### 11- Todo o histórico de coleta, desperdício evitado, composto gerado e redução de GEE é visualizado na plataforma.

ㅤㅤ
ㅤㅤ

## Benefícios da Coleta de Métricas e Mapeamento de Dados:

• Permite identificar feiras com maior potencial de reaproveitamento de alimentos.

• Otimiza rotas logísticas para coleta e redistribuição.

• Fornece dados concretos para formulação de políticas públicas.

• Apoia a tomada de decisão em tempo real para intervenções rápidas.

• Aumenta a transparência e engajamento da sociedade com dados abertos.

• Gera relatórios automatizados com indicadores de impacto social e ambiental.

• Auxilia no planejamento de campanhas educativas e incentivos fiscais.

• Possibilita comparações entre bairros/RPAs e priorização de investimentos públicos.  

ㅤㅤ
ㅤㅤ

## Componentes dos Dispositivos IoT:

### 1. Cestas Inteligentes:

Raspberry Pi 4 ou ESP32-CAM
Câmera (Pi Camera ou módulo ESP32-CAM)
LED RGB para feedback visual
Conexão Wi-Fi (ou LoRa para locais com rede fraca)
Algoritmo de visão computacional embarcado

ㅤㅤ



### 2. Lixeiras Inteligentes:

ESP32
Sensor ultrassônico (HC-SR04)
Sensor de temperatura (opcional)
Fonte de energia (power bank ou painel solar)
Wi-Fi integrado

ㅤㅤ
ㅤㅤ



## Arquitetura da Solução:

[Dispositivos IoT: Cestas e Lixeiras] (MQTT ou HTTP)
     ↓
     
[Broker MQTT / API Gateway (ex: AWS IoT Core)]
     ↓
     
[Backend Serverless (AWS Lambda + DynamoDB)]
     ↓
     
[Plataforma Web e Mobile (Vue.js)]
     ↓
     
[Usuários: feirantes, cozinhas, prefeitura, ONGs]  
ㅤㅤ
ㅤㅤ

## Tabela de Preços:

| Componente                                    | Função                         | Preço Aproximado (R\$) |
| --------------------------------------------- | ------------------------------ | ---------------------- |
| ESP32-CAM ou Raspberry Pi                     | Processamento + câmera         | R\$ 60 – R\$ 250       |
| Câmera (incluída ou Pi Cam)                   | Captura de imagem              | incluso/R\$ 100        |
| Sensor de peso (HX711 + célula)               | Medição da quantidade por peso | R\$ 30 – R\$ 50        |
| Módulo Wi-Fi (já incluso no ESP32)            | Envio dos dados                | incluso                |
| LEDs RGB                                      | Feedback visual de status      | R\$ 5 – R\$ 10         |
| Caixa resistente (plástico reciclado ou inox) | Estrutura física               | R\$ 150 – R\$ 300      |
| Fonte de energia (bateria/PV)                 | Energia autônoma               | R\$ 50 – R\$ 200       |

ㅤㅤ
ㅤㅤ

## Benefícios diretos e Resultados esperados:

#### Combate ao desperdício: 
Dados mostram que mais de 60% dos alimentos descartados nas feiras públicas do Recife estão em condições de consumo. Com métricas, é possível identificar padrões e pontos críticos de perda para ações corretivas. 

#### Planejamento logístico eficiente: 
Ao saber onde, quando e quanto alimento é disponibilizado ou descartado, é possível otimizar as rotas de coleta e redistribuição, economizando recursos.  

#### Geração de compostagem otimizada:
Com dados de volume e frequência de descarte, os SAFUCs podem planejar melhor a compostagem, garantindo maior eficiência na produção de composto e evitando sobrecargas.  

#### Redução de gases de efeito estufa (GEE):
Cada tonelada de resíduos orgânicos evitada no aterro representa cerca de 1,9 toneladas de CO₂e não emitidas (segundo IPCC/UNEP). Ao reduzir o envio de resíduos aos aterros, a solução contribui diretamente para mitigar os efeitos das mudanças climáticas.  

#### Formulação de políticas públicas baseadas em evidências:
Os dados coletados ajudam gestores a planejar investimentos, campanhas de conscientização, incentivos para feirantes, e integração com cozinhas populares e unidades de compostagem.  

#### Transparência e controle social:
A população poderá acompanhar os impactos em tempo real, aumentando o engajamento e pressionando por melhorias constantes.

ㅤㅤ
ㅤㅤ

## Próximos Passos:

Construção de protótipos das cestas e lixeiras

Treinamento do modelo de visão computacional

Desenvolvimento do backend e frontend da plataforma

Parcerias com feirantes, cozinhas solidárias e a prefeitura

Validação do MVP em uma feira pública

#### Essa solução alia sustentabilidade, inclusão social e tecnologia acessível para resolver um problema crítico com potencial de alto impacto local e replicabilidade nacional.














