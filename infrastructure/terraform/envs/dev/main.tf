module "rag_db" {
  source = "./modules/database"

  db_name = "rag_metadata_registry"
}

module "vector_cache" {
  source = "./modules/redis"

  cluster_mode = false
}

module "rag_monitoring" {
  source = "./modules/monitoring"

  retention_days = 180
}

resource "kubernetes_namespace" "ai_systems" {
  metadata {
    name = "rag-intelligence"
    labels = {
      "ai.ops/managed" = "true"
    }
  }
}

resource "kubernetes_config_map" "rag_configs" {
  metadata {
    name      = "rag-pipeline-configs"
    namespace = kubernetes_namespace.ai_systems.metadata[0].name
  }

  data = {
    "embedding-model" = "all-minilm-l6-v2"
    "chunk-size"      = "512"
    "top-k"           = "5"
  }
}
